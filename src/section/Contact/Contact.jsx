import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

  const Contact =()=>{
    return(
        <div className="flex items-end gap-4 text-2xl ">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faFacebook}
        />
      </div>
    );
  }

  export default Contact;