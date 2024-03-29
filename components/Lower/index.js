import React from 'react';

import KidsImg from './../../images/KidsImg.png';

import { Wrapper, Content } from './Lower.styles';

const Lower = () => (
    <Wrapper>
        <div className = "Happykids" style={{ backgroundImage: `url(${KidsImg})` }}>
        <Content>  
            <div class="container-fluid">
            <div class="text-center">
                <div class="row">
                    <div class="col" >
                        <h2 className='Move'>
                            <b class='reach'>Help Us Reach Out To The Youths</b>
                        </h2>
                    </div>
                    
                    <div class="col">
                    
                        <div>
                            <a href= '../Pages/Donate'>
                        <input class="donatebtn" type="submit" value="Donate" id="submit">
                        </input>
                        </a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </Content>
        </div>
    </Wrapper>
);

export default Lower;