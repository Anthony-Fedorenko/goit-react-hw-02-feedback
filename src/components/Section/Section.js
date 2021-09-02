import style from './Section.module.css'
import PropTypes from "prop-types";

const Section = ({title, children}) => (
    <section>
        <h1 className={style.name}>{title}</h1>
        {children}
    </section>
)


Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section