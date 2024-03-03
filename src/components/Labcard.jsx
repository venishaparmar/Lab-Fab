import "../styles/LabCard.css"

export default function Labcard() {
    return (
        <div>
            <div className="card-list">
                <a href="#" className="card-item">
                    <img src="../assets/images/background.png" alt="Card Image" />
                    <span className="developer">Developer</span>
                    <h3>A developer codes software and websites.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src="" alt="Card Image" />
                    <span className="designer">Designer</span>
                    <h3>A designer is a design expert.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src="" alt="Card Image" />
                    <span className="editor">Editor</span>
                    <h3>An editor ensures content quality and accuracy.</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
            </div>
        </div>
    )
}
