import './Variant.css'

const Variant = ({ variant, id, click, }) => {
    let label = '';
    switch (id) {
        case 0:
            label = 'A'
            break;
        case 1:
            label = 'B'
            break;
        case 2:
            label = 'C'
            break;
        case 3:
            label = 'D'
            break;
        default:
            break;
    }
    return (
        <div className="variant" onClick={() => {
            click(id)
        }}>
            <span className="space">{label}</span>
            {variant}
        </div>
    );
}

export default Variant;
