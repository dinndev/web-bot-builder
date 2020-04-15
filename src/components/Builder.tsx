import React from 'react'
import BuilderHeader from './BuilderHeader'


class Builder extends React.Component {

    state: any = {
        currentPath: 1
    }

    handlePathClick(index: number) {
        console.log(index)
        this.setState({ currentPath: index })
    }

    render() {
        return (
            <div className="builder-container bg-white w-5/6 h-full max-h-90 mt-5per m-auto inset-0 absolute rounded-20px shadow-pink overflow-hidden">
                <BuilderHeader currentPath={this.state.currentPath} onClick={this.handlePathClick.bind(this)} />
            </div>
        )
    }
}


export default Builder