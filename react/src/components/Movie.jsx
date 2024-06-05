import React, { Component } from 'react';
import MovieList from './MovieList'

class Movie extends Component {
	constructor() {
		super()
		this.state = {
			movieList: []
		}
	}

	componentDidMount() {
		fetch('api/movies')
			.then(respuesta => respuesta.json())
			.then(movies => {
				this.setState({ movieList: movies.data })
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<React.Fragment>
				<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Titulo</th>
										<th>Calificación</th>
										<th>Premios</th>
										<th>Duración</th>
									</tr>
								</tfoot>
								<tbody>
									{
										this.state.movieList.map((movie, i) => (
											<MovieList {...movie} key={i} />
										))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Movie;