import React from 'react'
import Full from '../assets/full.png'
import Popup from '../assets/popup.png'
import Embed from '../assets/embed.png'
const displayTypes = [
    {
        title: 'FULLPAGE',
        class: "bot-type-full",
        img: Full
    },
    {
        title: 'POPUP',
        class: "bot-type-popup",
        img: Popup
    },
    {
        title: 'EMBED',
        class: "bot-type-embed",
        img: Embed
    }
]

const DisplayTypes = (props: any) => {
    let types: any = [];
    for (const type of displayTypes) {
        let isActive = type.title === props.active
        types.push(
            <div key={displayTypes.indexOf(type)} className={`bot-type ${isActive && 'active'} ${type.class} border border-solid rounded-md mx-4`} onClick={() => props.onClick(type.title)}>
                <img src={type.img} alt="" width="100" />
                <span className="bot-type-title">
                    <span className="bot-type-title">{type.title}</span>
                </span>
            </div>
        )
    }

    return types
}

interface State {
    active: string
}
class TemplateContent extends React.Component<any> {

    state: State = {
        active: "FULLPAGE"
    }

    handleBotTypeClick(type: string) {
        this.setState({
            active: type
        })
    }

    render() {
        return (
            <div className="template-content">
                <div className="bot-styles">
                    <div className="builder-content-list">
                        <span>1. Choose your chatpack display type</span>
                        <div className="bot-types flex w-full my-3 ml-5">
                            <DisplayTypes onClick={this.handleBotTypeClick.bind(this)} active={this.state.active} />
                        </div>
                    </div>

                    <div className="builder-content-list">
                        <span>2. Design template</span>
                        <div className="bot-templates flex flex-wrap w-full my-3 ml-5">
                            <div className="box-template bg-orange-300 m-4"></div>
                            <div className="box-template bg-gray-300 m-4"></div>
                            <div className="box-template bg-blue-300 m-4"></div>
                            <div className="box-template bg-green-300 m-4"></div>
                            <div className="box-template bg-red-300 m-4"></div>
                            <div className="box-template bg-yellow-300 m-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TemplateContent