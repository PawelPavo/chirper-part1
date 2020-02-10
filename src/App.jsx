import React from 'react'
import ChirpCard from './components/ChirpCard'
import { FaUser, FaFeather, FaPaperPlane } from 'react-icons/fa'
import Animate from 'react-smooth'





class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            chirp: '',
            chirps: []
        }
    }

    componentDidMount() {
        const ChirpData = [
            {
                name: 'Slums Attack',
                chirp: 'How is this going to work?',
                id: 'a',
                created_at: Date.now()
            },
            {
                name: 'Peja',
                chirp: 'I am not sure yet...',
                id: 'b',
                created_at: Date.now()
            },
            {
                name: 'Slums Attack',
                chirp: 'We have to make this work',
                id: 'c',
                created_at: Date.now()
            },
        ]
        this.setState({ chirps: ChirpData })
    }

    handleNameInput = (value) => {
        this.setState({ name: value })
    }

    handleChirpInput = (value) => {
        this.setState({ chirp: value })
    }

    handleClick = () => {
        let randomId = Math.floor(Math.random() * 10000) + 1;
        this.setState({
            chirps: [{
                name: this.state.name,
                chirp: this.state.chirp,
                id: randomId,
                created_at: Date.now()
            }, ...this.state.chirps], name: '', chirp: ''
        })
    }

    render() {
        return (
            <>
                <Animate to="5" from="0" attributeName="opacity">
                    <main className='container'>
                        <div className='jumbotron text-center shadow-lg mt-3 sticky-top'>
                            <h1 className='text-monospace text-success'>WELCOME TO CHIRP</h1>
                            <hr className="my-4" />
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-success text-white"><FaUser /></span>
                                </div>
                                <input id="nameInput" type="text" className="form-control" placeholder="Enter a Chirp Handle"
                                    value={this.state.name}
                                    onChange={(event) => this.handleNameInput(event.target.value)}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-success text-white"><FaFeather /></span>
                                </div>
                                <input id="chirpInput" type="text" className="form-control" placeholder="Enter Your Chirp"
                                    value={this.state.chirp}
                                    onChange={(event) => this.handleChirpInput(event.target.value)}
                                />
                            </div>
                            <div>
                                <hr className="my-4" />
                                <button className='btn btn-success btn-lg' onClick={this.handleClick}><FaPaperPlane /> Post Chirp</button>
                            </div>
                        </div>
                        <section className='row justify-content-center my-3'>
                            {this.state.chirps.map(message => (
                                <ChirpCard key={message.id} name={message.name} chirp={message.chirp} date={message.created_at} />
                            ))}
                        </section>
                    </main>
                </Animate>
            </>
        )
    }
}



export default App