import React from 'react'
import BuilderHeader from './BuilderHeader'
import PathContent from './PathContent'
import BotPreview from './BotPreview'
// import Logo from '../assets/logo.jpg'


class Builder extends React.Component {

    state: any = {
        currentPath: 0
    }

    handlePathClick(index: number) {
        this.setState({ currentPath: index })
    }

    render() {
        return (
            <div className="builder-container bg-white w-5/6 flex flex-col h-full max-h-90 mt-5per m-auto inset-0 absolute rounded-20px shadow-pink overflow-hidden">
                <BuilderHeader currentPath={this.state.currentPath} onClick={this.handlePathClick.bind(this)} />
                <div className="builder-body flex h-full">
                    <PathContent currentPath={this.state.currentPath} />
                    <BotPreview />
                </div>
            </div>
        )
    }
}

export default Builder