import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="mt-3">Journalism Without Fear or Favour</p>
                <p>{moment().format('MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;