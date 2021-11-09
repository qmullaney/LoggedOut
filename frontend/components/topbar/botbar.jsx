import React from 'react';
import { connect } from 'react-redux';

import { FaGithub, FaAngellist, FaLinkedin } from "react-icons/fa";

class BotBar extends React.Component{
    render(){
        return (
            <div className='bot-bar'>
                    <a target='_blank' href="https://github.com/qmullaney/LoggedOut"> <FaGithub/> </a>
                    <a target='_blank' href="https://www.linkedin.com/in/quinntmullaney/"> <FaLinkedin /> </a>
                    <a target='_blank' href="https://angel.co/u/quinn-mullaney"><FaAngellist/></a>
            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(BotBar);