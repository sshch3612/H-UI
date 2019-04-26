export default (function() {
  const rulesSet = {
    message: function(value) {
      if (value == "") {
        return "请输入正确内容";
      }
    }
  };
  return function createForm(option = [], params = {}) {
    if (!Array.isArray(option)) {
      throw "option is array";
    }
    const _this = this;
    const data = []; //用于存储所有name
    option.map(item => {
      data.push(item.name);
      _this.state = {
        //全部挂载到State上
        ..._this.state,
        [`${item.name}`]: {
          ...item,
          onBlur: value => {
            const error = item.rules ? verifyRules(item.rules, value) : null;
            this.setState((prestate, props) => ({
              [`${item.name}`]: { ...prestate[`${item.name}`], error: error }
            }));
            item.onBlur && item.onBlur(value);
          },
          onFocus: value => {
            this.setState((prestate, props) => ({
              [`${item.name}`]: { ...prestate[`${item.name}`], error: null }
            }));
            item.onFocus && item.onFocus();
          }
        }
      };
    });

    function getFieldDecorator(name) {
      // return data[name]();
      return _this.state[name];
    }

    function globalVerify() {
      let result = null;

      data.some((item, index) => {
        const error = verifyRules(_this.state[item].rules,_this.state[item].value);
        if (error != undefined) {
            result = {
              name: item,
              error: error
            };
            return;
          }
        });
      if(result){
        _this.setState((prestate,props)=>({
          [result.name]: {...prestate[result.name],error:result.error}
        }))
        return result;
      }else{
        console.log('验证通过')
      }
      return;
    }

    function verifyRules(rules, value) {
      if(rules === undefined || rules===null){
        return;
      }
      let result = null;
      Object.keys(rules).some((item, index) => {
        result = rulesSet[item](value);
        if (result != undefined) {
          return;
        }
      });
      return result;
    }

    

    function getFieldsValue() {
      const fieldsValue = {};
      data.map((item, index) => {
        fieldsValue[item] = _this.state[item].value;
      });
      return fieldsValue;
    }

    return {
      getFieldDecorator: getFieldDecorator,
      getFieldsValue: getFieldsValue,
      globalVerify: globalVerify
    }
  };
})();
