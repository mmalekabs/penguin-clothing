import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as PenguinLogo} from "../../assets/penguin.svg";

import './navigation.styles.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <PenguinLogo className='logo' style={{width: 50, height: 50}}/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
                {/*<div className='nav-links-container'>*/}
                {/*    <Link className='nav-link' to='/shop'>*/}
                {/*        SHOP*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
            <Outlet/>
        </Fragment>
    );
}
export default Navigation