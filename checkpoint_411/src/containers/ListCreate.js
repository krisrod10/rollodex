import { connect } from 'react-redux';
import ListCreate from '../components/ListingCreate';
import { addBusiness } from '../redux/action';

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreate);