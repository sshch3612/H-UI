import React from "react";
import classnames from "classnames";
import "./ImagePicker.less";

export default class extends React.PureComponent {
  state = {
    imgArray: null,
    imageZoom: false,
  };
  _handleInputChange = event => {
    // 获取当前选中的文件
    const file = event.target.files[0];
    const imgMasSize = 1024 * 1024 * 10; // 10MB
    // 文件类型检查
    // if(['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0){
    //     // Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);
    //     return;
    // }
    // 文件大小限制
    // if(file.size > imgMasSize ) {
    //     // 文件大小自定义限制
    //     // Toast.error("文件大小不能超过10MB！", 2000, undefined, false);
    //     return;
    // }

    // 判断是否是ios
    // if(!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
    //     // iOS
    //     transformFileToFormData(file);
    //     return;
    // }

    // 图片压缩之旅
    this.transformFileToDataUrl(file);
  };

  _handleImageRemove = (e) => {
    e.preventDefault();
    const  { onRemove } = this.props;
    this.setState({
      imgArray: null
    },()=>{
      onRemove && onRemove();
    })
  }

  _handleImagePreview = (e) => {
    this.setState((prestate,props)=>({
      imageZoom: !prestate.imageZoom
    }))
    this.toggleFullScreen();
  }

  transformFileToDataUrl = file => {
    //图片压缩条件 ()
    const reader = new FileReader();

    // file转dataUrl是个异步函数，要将代码写在回调里
    const _this = this;
    reader.onload = function(e) {
      const result = e.target.result;
      _this.compress(
        result,
        function(arg) {
          _this.setState({
            imgArray: arg
          });
        },
        0.3
      );
    };

    reader.readAsDataURL(file);
    //compress 压缩
  };
  /**
   *DataUrl  转 Blob
   *参考Blob/DataURL/canvas/image的相互转换 https://www.cnblogs.com/jyuf/p/7251591.html
   */
  transformDataUrlToBlob = dataUrl => {
    const binaryString = window.atob(dataUrl.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const intArray = new Uint8Array(arrayBuffer);
    const imgFile = this.imgFile;

    for (let i = 0, j = binaryString.length; i < j; i++) {
      intArray[i] = binaryString.charCodeAt(i);
    }

    const data = [intArray];

    let blob;

    try {
      blob = new Blob(data, { type: imgFile.type });
    } catch (error) {
      window.BlobBuilder =
        window.BlobBuilder ||
        window.WebKitBlobBuilder ||
        window.MozBlobBuilder ||
        window.MSBlobBuilder;
      if (error.name === "TypeError" && window.BlobBuilder) {
        const builder = new BlobBuilder();
        builder.append(arrayBuffer);
        blob = builder.getBlob(imgFile.type);
      } else {
        throw new Error("版本过低，不支持上传图片");
      }
    }

    // blob 转file
    const fileOfBlob = new File([blob], imgFile.name);

    //formdata对象封装
    const formData = new FormData();
    // type
    formData.append("type", imgFile.type);
    // size
    formData.append("size", fileOfBlob.size);
    // name
    formData.append("name", imgFile.name);
    // lastModifiedDate
    formData.append("lastModifiedDate", imgFile.lastModifiedDate);
    // append 文件
    formData.append("file", fileOfBlob);

    uploadImg(formData);
  };
  /**
   *canvas图片压缩 转换压缩
   *fileUrl 图片url
   *radio 压缩比例
   */
  compress = (fileUrl, callback, ratio = 0.2) => {
    //创建Image对象
    const img = new Image();

    //压缩方法的调用以必须放在图片的 onload 方法里
    console.log(88883, img, fileUrl);
    img.onload = function() {
      console.log(3333);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      let compressedDataUrl = canvas.toDataURL(fileUrl.type, 0.2);
      //回调获取值
      callback(compressedDataUrl);
    };
    img.src = fileUrl;
  };

  // 上传图片
  uploadImg = (formData, uploadUrl, SucCallback, ErrCallback) => {
    const xhr = new XMLHttpRequest();

    // 进度监听
    xhr.upload.addEventListener(
      "progress",
      e => {
        console.log(e.loaded / e.total);
      },
      false
    );
    // 加载监听
    // xhr.addEventListener('load', ()=>{console.log("加载中");}, false);
    // 错误监听
    xhr.addEventListener(
      "error",
      () => {
        Toast.error("上传失败！", 2000, undefined, false);
      },
      false
    );
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        const result = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          // 上传成功
          SucCallback();
        } else {
          // 上传失败
          ErrCallback();
        }
      }
    };
    xhr.open("POST", "/uploadUrl", true);
    xhr.send(formData);
  };

  //  全屏切换
  toggleFullScreen = () => {
    if (!document.fullscreenElement) {//screenfull.js 兼容封装见：https://github.com/sindresorhus/screenfull.js
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
  render() {
    const { imgArray ,imageZoom} = this.state;
    return (
      <div
        className={classnames("image-picker-item", {
          "image-picker-item-btn": imgArray === null
        })}
      >
       {!imgArray && <input
          type="file"
          name="text"
          accept="image/*"
          onChange={this._handleInputChange}
        />}
        {imgArray &&
        <React.Fragment>
          <div className='image-picker-item-remove' onClick={this._handleImageRemove}></div>
          <div className={classnames('image-picker-item-content',{'image-picker-item-zoom':imageZoom})}  style={{backgroundImage:`url(${imgArray})`}} onClick={this._handleImagePreview}></div>
          </React.Fragment>}
          {imageZoom && <div className='image-picker-item-mask'>
          <div className='image-picker-item-mask-operate'></div>
          </div>}
      </div>
    );
  }
}
