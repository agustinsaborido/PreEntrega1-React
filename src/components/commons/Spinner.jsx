import './Spinner.css'
import ClockLoader from 'react-spinners/ClockLoader'

const override = {
    display: 'block',
    margin: 'auto',
    borderColor: '#ebe4f3',
};

function Spinner({ IsLoading }) {
    return (
        <div className="containerSpinner">
            <ClockLoader
            color='red'
            loading={IsLoading}
            cssOverride={override}
            size={50}
            aria-label='Loading Spinner'
            data-testid="loader"
            />
        </div>
    );
}

export default Spinner;
