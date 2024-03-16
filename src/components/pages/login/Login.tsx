import "./Login.css"

export function Login() {
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="card  col-lg-3 col-md-4">
                <div className="card-header bg-info">
                    <div className="card-title text-center h4">Login</div>
                </div>
                <div className="card-body">
                    <form className="form">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-medium">Username</label>
                            <input className="form-control" type="text"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-medium">Password</label>
                            <input className="form-control" type="password"></input>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info text-center">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}