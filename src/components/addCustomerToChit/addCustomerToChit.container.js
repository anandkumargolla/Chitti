import { connect } from 'react-redux';
import AddCustomerToChit from './addCustomerToChit.component'
// import {updateAllChitList} from './addCustomer.actions'

const mapStateToProps = (state) => {
    return {
        // allChitList: state.ChitReducer.allChitList
    }
}

export default connect(mapStateToProps)(AddCustomerToChit);