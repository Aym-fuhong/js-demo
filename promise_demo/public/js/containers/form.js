import {connect} from 'react-redux';
import Form from '../component/form';
import {onSubmitForm} from '../actions/form'

const mapStateToProps = state => {
    return {
        userInfo: state.form
    }
};

const mapDispatchToProps = dispatch => {
        return {
            submitForm: userInfo => {
                dispatch(onSubmitForm(userInfo))
            }
        }
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);