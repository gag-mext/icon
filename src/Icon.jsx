import '../style';
const React =require( 'react');
const classNames =require( 'classnames');

// http://stackoverflow.com/questions/29891458/webpack-require-every-file-in-directory
// const svgRequire = (require as any).context('./style/assets', false, /\.svg$/);
// svgRequire.keys().forEach(key => svgRequire(key));

class Icon extends React.Component{
  constructor(props) {
        super(props);
    }
  renderSvg = () => {
    let svg;
    try {
      svg = require(`../style/assets/${this.props.type}.svg`);
    } catch (e) {

    } finally {
      return svg;
    }
  }
  render() {
    const { type, className, style, size, ...restProps } = this.props;
    let xlinkHref = this.renderSvg();
    let outerIcon;
    if (!xlinkHref) {
      outerIcon = true;
      xlinkHref = type;
     } else {
      xlinkHref = `#${type}`;
     };
    if(typeof type ==='object'){
       xlinkHref=`#${type.id}`;
     }//svg插件升级后background可以使用svg
    const iconClassName = classNames({
      'am-icon': true,
      [`am-icon-${outerIcon ? xlinkHref.substr(1) : type}`]: true,
      [`am-icon-${size}`]: true,
      [className]: !!className,
    });
    return <svg className={iconClassName} style={style} {...restProps}>
      <use xlinkHref={xlinkHref} />
    </svg>;
  }
}
Icon.defaultProps = {
  size: 'md'
};
Icon.propTypes = {
type: React.PropTypes.string,
className: React.PropTypes.string,
size: React.PropTypes.oneOf(['xxs','xs','sm','md','lg']),
onClick: React.PropTypes.func,
};
Icon.displayName = "Icon";
module.exports=Icon;
