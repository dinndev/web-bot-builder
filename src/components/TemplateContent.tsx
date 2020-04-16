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
            <div key={displayTypes.indexOf(type)} className={`bot-type ${isActive && 'active'} ${type.class} border border-solid rounded-md`} onClick={() => props.onClick(type.title)}>
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
        active: ""
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
                    <span className="">1. Choose your chatpack display type.</span>
                    <div className="bot-types flex w-full">
                        <DisplayTypes onClick={this.handleBotTypeClick.bind(this)} active={this.state.active} />
                    </div>

                </div>
            </div>
        )
    }
}

export default TemplateContent