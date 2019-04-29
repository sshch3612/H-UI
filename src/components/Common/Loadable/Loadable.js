import React, { lazy, Suspense } from "react";
import Loadable from "react-loadable";

const Loading = () => {
  return <div className='page-content' style={{backgroundColor:'red'}}>loading...</div>;
};

// export default (Loader) => {
//   const LoadableComponent = Loadable({
//     loader: Loader,
//     loading: Loading
//   })

//   return class LoadableHOC extends React.Component {
//     render () {
//       const {...restProps } = this.props;
//       return <div ><LoadableComponent {...restProps}></LoadableComponent></div>
//     }
//   }
// }

export default Loader => {
  const LoadableComponent = lazy(Loader);

  return class LoadableHOC extends React.Component {
    render() {
      const { ...restProps } = this.props;
      return (
        <div>
        <Suspense fallback={Loading}>
          <LoadableComponent {...restProps} />
        </Suspense>
        </div>
      );
    }
  };
};
