import React from "react";

function Footer() {
   const name = "Jay Ansin";
   return (
      <footer>
         <p>
            &copy; {new Date().getFullYear()}, {name}
         </p>
      </footer>
   );
}

export default Footer;
