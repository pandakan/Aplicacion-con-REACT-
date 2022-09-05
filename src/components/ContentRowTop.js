import react from "react";

import ContentRowMovies from './ContentRowMovies'
import PropTypes from 'prop-types'

function Content(props) {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			{/* el .map va accediendo a cada objeto que le fue pasado por el array e itera cada uno, si se accede al titulo el map va a acceder a cada titulo de cada objeto */}

			{/* <!-- Content Row Movies--> */}

			<div className="row">

				{props.info.map( (item , i) =>

					<div key={i + item} className="col-md-4 mb-4">
						<div 	className="card border-left-primary shadow h-100 py-2 ">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800"> {item.cifra}</div>
									</div>
									<div className="col-auto">
										<i className="fas fa-film fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>

				)}

			</div>

			<ContentRowMovies />

		</div>
	)
}
Content.propTypes = {
	titulo : PropTypes.string.isRequired,
	cifra : PropTypes.oneOfType([
		PropTypes.number.isRequired,
		PropTypes.string.isRequired
	]),
	color : PropTypes.string.isRequired,
	cifra : PropTypes.oneOfType([
		PropTypes.number.isRequired,
		PropTypes.string.isRequired
	]),
	icono : PropTypes.oneOf
	([
		'border-left-primary',
		'border-left-success',
		'border-left-warning'
	]).isRequired
};
Content.defaultProps = {
	titulo: 'Titulo sin definir',
	cifra: 'Cifra desconocida',
	color: 'primary',
	icono: 'border-left-primary'
}
export default Content