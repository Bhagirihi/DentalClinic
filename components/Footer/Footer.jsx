// NextUI Components
import { IconButton } from "@mui/material";

// Icons
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material/";

// Styles
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContactDetailsContainer}>
        <div>
          <h3>Availability</h3>
          <p>
            Mon: 9:00 am - 6:00 pm <br />
            Tue: 9:00 am - 6:00 pm <br />
            Wed: 9:00 am - 6:00 pm <br />
            Thu: 9:00 am - 6:00 pm <br />
            Fri: 9:00 am - 6:00 pm <br />
            Sat: Scheduled appointments
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Carrera 2da # 58-04, Los Andes,
            <br /> Cali, Colombia.
          </p>
          <p>
            Cel. +57 (322) 200-9244 <br />
          </p>
          <div className={s.socialMediaContainer}>
            <div>
              <a
                href="https://www.instagram.com/clinicadentalboreal/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton
                  color="secondary"
                  aria-label="upload picture"
                  component="span"
                >
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/BorealClinicaDental/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </a>
            </div>
            <div>
              <a
                href="https://wa.link/y8wop2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton
                  color="success"
                  aria-label="upload picture"
                  component="span"
                >
                  <WhatsAppIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className={s.lowerFooter}>
        <p>
          My Dental Clinic 2023 - All rights reserved.
        </p>
        <div className={s.terminos}>
          {/* <a href="#" rel="noopener noreferrer"> */}
          <p>Terms and Conditions</p>
          {/* </a> */}
          {/* <a href="#" rel="noopener noreferrer"> */}
          <p>Privacy policies</p>
          {/* </a> */}
        </div>
      </div>
    </footer>
  );
};
