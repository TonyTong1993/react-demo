/**
 * Created by TonyTong on 2017/3/5.
 */
import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibility } from '../actions/Actions.js'
const mapStateToProps = (state,ownProp)=>{
    return {
        active:state.visibilityFilter === ownProp.filter
    }
};
const mapDispatchToProps =(dispatch,ownProps)=>{
    return {
        onLinkClick:()=>{
            dispatch(setVisibility(ownProps.filter))
        }
    }
}
let FooterLink = connect(mapStateToProps,mapDispatchToProps)(Link);
export default FooterLink;
