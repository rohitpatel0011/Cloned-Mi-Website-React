import React from "react";
import "../../styles/nav.css";
import {Link} from "react-router-dom";
// import logo from "../../../Xiaomi_logo_(2021-).svg"
// import logo from "../../../"
import "bootstrap/dist/css/bootstrap.min.css"


const milogo =<svg  
width="30px" height="30px" viewBox="-200.008 -199.727 512 512" enable-background="new -200.008 -199.727 512 512"
>
<g>
<g>
 <g>
   <path id="路径_1_" fill="#FF6900" d="M258.626-146.231c-48.304-48.118-117.759-53.496-202.634-53.496
     c-84.982,0-154.542,5.44-202.826,53.688c-48.277,48.228-53.174,117.676-53.174,202.561c0,84.899,4.897,154.368,53.194,202.613
     c48.281,48.255,117.833,53.139,202.806,53.139c84.974,0,154.514-4.884,202.795-53.139
     c48.294-48.254,53.205-117.714,53.205-202.613C311.992-28.472,307.028-97.995,258.626-146.231L258.626-146.231z"/>
 </g>
</g>
<g>
 <g>
   <path id="形状结合" fill="#FFFFFF" d="M204.546-41.122c1.759,0,3.223,1.417,3.223,3.161v189.386
     c0,1.715-1.464,3.139-3.223,3.139H163.05c-1.781,0-3.228-1.424-3.228-3.139V-37.961c0-1.743,1.446-3.161,3.228-3.161H204.546z
      M24.468-41.122c31.303,0,64.033,1.435,80.176,17.589c15.871,15.897,17.59,47.549,17.656,78.286v96.671
     c0,1.715-1.446,3.139-3.219,3.139h-41.49c-1.777,0-3.229-1.424-3.229-3.139V53.09c-0.044-17.167-1.031-34.81-9.884-43.692
     c-7.62-7.641-21.839-9.391-36.625-9.754h-75.21c-1.764,0-3.208,1.419-3.208,3.136v148.645c0,1.715-1.462,3.139-3.237,3.139
     h-41.516c-1.774,0-3.201-1.424-3.201-3.139V-37.961c0-1.743,1.426-3.161,3.201-3.161H24.468z M33.755,34.305
     c1.766,0,3.201,1.413,3.201,3.143v113.977c0,1.715-1.436,3.139-3.201,3.139H-9.829c-1.792,0-3.228-1.424-3.228-3.139V37.448
     c0-1.73,1.436-3.143,3.228-3.143H33.755z"/>
 </g>
</g>
</g>
</svg>


const serachIcon =  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"  viewBox="0 -960 960 960" ><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"  viewBox="0 -960 960 960" ><path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>
const userIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"  viewBox="0 -960 960 960" ><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>

const Navbar = () => {
  return (
    <>
      <div className="nav navbar-expand-sm sticky-top w-100">
        <div className="nav-items">
          <Link to="/">
            <img id="logoImage" src="#" alt="" />{milogo}
          </Link>

          <Link className="navlinks" href="/phones">
            Mi Phones
          </Link>
          <Link className="navlinks" href="/store">
            Store
          </Link>
          <Link className="navlinks" href="/tv">
            TV
          </Link>
          <Link className="navlinks" href="/laptops">
            Laptops
          </Link>
          <Link className="navlinks" href="/lifestyle">
            Fitness & Lifestyle
          </Link>
          <Link className="navlinks" href="/home">
            Home
          </Link>
          <Link className="navlinks" href="/audio">
            Radio
          </Link>
          <Link className="navlinks" href="/accessories">
            Accessories
          </Link>
        </div>

        <div>
          <Link className="navlinks" href="/discover">
            Discover
          </Link>
          <Link className="navlinks" href="/support">
            Support
          </Link>
          <img id="logoImage" src="#" alt="" />{serachIcon}
          <img id="logoImage" src="#" alt="" />{cartIcon} 
          <img id="logoImage" src= "#" alt = "" />{userIcon}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
