import React from "react";
import Noticebar from "./Noticebar";
import { Whitespace, Wingblank } from "../../Layout";
import {Iconfont} from '../../Base'

export default class extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <Whitespace>
          <Wingblank>
            文本
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Noticebar>
              [单行]国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开
            </Noticebar>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
          <Noticebar rows={'multiline'}>
              [多行]国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开
            </Noticebar>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            跑马灯
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Noticebar  animate={true}>
              国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开
            </Noticebar>
          </Wingblank>
        </Whitespace>
        <Whitespace>
          <Wingblank>
            <Noticebar icon={ <Iconfont type={'systemprompt'} size={22} color={'#de8c17'}/>} animate={true}>
              国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开
            </Noticebar>
          </Wingblank>
        </Whitespace>
      </div>
    );
  }
}
