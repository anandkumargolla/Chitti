import {connect} from 'react-redux';
import AddCustomer from './addCustomer.component'
// import {updateAllChitList} from './addCustomer.actions'

const mapStateToProps = (state) => {
    return {
        // allChitList: state.ChitReducer.allChitList
    }
}

export default connect(mapStateToProps)(AddCustomer);