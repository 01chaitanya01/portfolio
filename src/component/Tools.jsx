import React from 'react';
import '../style/tool.css';

import github from '../images/github.png';
import vscode from '../images/vscode.png';
import npm from '../images/npm.png';
import git from '../images/Git.png';
import ubuntu from '../images/ubuntu.png';
import reactLogo from '../images/react.png';
import colab from '../images/colab.png';

const Tools = () => {
  return (
    <div className='tools'>
      <div className='tool-image'>
        <img src={github} alt='GitHub' />
      </div>

      <div className='tool-image'>
        <img src={vscode} alt='VSCode' />
      </div>

      <div className='tool-image'>
        <img src={npm} alt='npm' />
      </div>

      <div className='tool-image'>
        <img src={git} alt='Git' />
      </div>

      <div className='tool-image'>
        <img src={ubuntu} alt='Ubuntu' />
      </div>

      <div className='tool-image'>
        <img src={reactLogo} alt='React' />
      </div>

      <div className='tool-image'>
        <img src={colab} alt='Colab' />
      </div>
    </div>
  );
};

export default Tools;
