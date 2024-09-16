// 这里编写自定义js脚本；将被静态引入到页面中
function Pop(){var cssRuleFile="https://popupsmart.com/freechat_style.css";let lnk=document.createElement("link");lnk.setAttribute("rel","stylesheet");lnk.setAttribute("type","text/css");lnk.setAttribute("href",cssRuleFile);document.getElementsByTagName("head")[0].appendChild(lnk);var conDivObj;let content={show:false,logo:"https://d2r80wdbkwti6l.cloudfront.net/Ph2vy9vKwBjRN82OO2qj52qBipc8KspX.jpg",person:"https://d2r80wdbkwti6l.cloudfront.net/7xWicsi6maKd1k3YYM7WiIj8o7epoCkV.jpg",title:"MPG喵派好物團",message:"您好～請問有什麼可以幫您的呢 ？",color:"#F9754E",position:"right",button:"聯繫我們",placeholder:"Enter your message",withText:"Write with",viaWhatsapp:"Or write us directly via Whatsapp",gty:"Go to your",awu:"and write us",connect:"Connect now",track:0,device:"everywhere",services:[{"name":"instagram","content":"meowpawsgoodies"}],};const freechatSVG=`
    <svg width="2em" height="2em" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.697 10.8942H14.308C11.8371 10.8814 9.46221 11.8497 7.70466 13.5864C5.94712 15.3231 4.95062 17.6864 4.93396 20.1572V51.5422C4.93593 52.0122 5.03045 52.4772 5.21213 52.9107C5.39381 53.3441 5.65909 53.7376 5.99282 54.0685C6.32656 54.3995 6.72221 54.6614 7.15719 54.8395C7.59217 55.0175 8.05796 55.1081 8.52796 55.1062C9.2679 55.1054 9.98987 54.8782 10.597 54.4552L19.451 48.0972L23.651 45.0802L32.472 38.7462C32.7964 38.5134 33.1993 38.4175 33.5938 38.479C33.9883 38.5405 34.3428 38.7546 34.581 39.0752V39.0752C34.6973 39.2334 34.7811 39.4132 34.8273 39.6041C34.8736 39.795 34.8814 39.9932 34.8503 40.1871C34.8192 40.381 34.7499 40.5669 34.6463 40.7338C34.5427 40.9006 34.407 41.0452 34.247 41.1592L28.797 45.0802H41.697C44.1678 45.0929 46.5427 44.1247 48.3003 42.3879C50.0578 40.6512 51.0543 38.288 51.071 35.8172V20.1572C51.0546 17.6863 50.0581 15.3229 48.3005 13.5861C46.5429 11.8493 44.1679 10.8811 41.697 10.8942Z" fill="white"/>
    </svg>
  `;const pencilSVG=`
    <svg width="2em" height="2em" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M46.061 6.89886L49.4269 10.2648C50.3202 11.1613 50.8218 12.3753 50.8218 13.6408C50.8218 14.9064 50.3202 16.1204 49.4269 17.0168L45.827 20.6168L35.7079 10.4979L39.308 6.89783C40.2046 6.0048 41.4185 5.50342 42.684 5.50342C43.9494 5.50342 45.1634 6.0048 46.06 6.89783L46.061 6.89886ZM44.261 22.1779L23.844 42.5958L23.8379 42.6028L23.831 42.6088L23.8249 42.6149L23.8199 42.6198L23.8119 42.6268L23.806 42.6328L23.7989 42.6398L23.792 42.6469L23.785 42.6528L23.778 42.6588H23.772L23.764 42.6649L23.757 42.6708L23.7499 42.6768L23.743 42.6818L23.736 42.6879L23.7289 42.6938H23.723L23.715 42.6989L23.7079 42.7048L23.701 42.7108L23.693 42.7158L23.686 42.7219H23.678H23.672H23.665L23.657 42.7269L23.649 42.7318L23.641 42.7368H23.634L23.626 42.7418H23.62H23.612L23.6039 42.7468H23.5959H23.5879H23.58H23.572H23.566H23.558H23.55H23.542H23.535H23.527H23.519H23.512H23.504H23.496H23.488H23.48H23.472H23.464H23.459H23.451H23.442H23.434H23.426H23.418H23.41H23.403L14.903 46.9078C14.8286 46.954 14.7499 46.9929 14.668 47.0239L7.53094 50.5158C7.27383 50.6414 6.98397 50.6836 6.70172 50.6365C6.41947 50.5894 6.15893 50.4554 5.95654 50.2531C5.75414 50.0508 5.61994 49.7904 5.57269 49.5082C5.52544 49.226 5.56752 48.936 5.69299 48.6788L9.24298 41.4249L9.25897 41.3928L13.459 32.8038C13.5276 32.6192 13.6353 32.4517 13.775 32.3129L34.192 11.8958L44.31 22.0139L44.261 22.1779ZM12.092 41.9099L14.4109 44.2288L20.5309 41.2349L15.087 35.7908L12.092 41.9099Z" fill="white"/>
    </svg>  
  `;let freechatIconSVG=freechatSVG;const messengerSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.999 5C15.087 5 2.99902 16.193 2.99902 30C3.0335 33.782 3.95052 37.5037 5.67706 40.8687C7.4036 44.2338 9.89197 47.1493 12.944 49.383V49.383V59L22.006 53.888C24.6056 54.6288 27.2959 55.0031 29.999 55C44.912 55 56.999 43.806 56.999 30C56.999 16.194 44.912 5 29.999 5ZM32.73 38.452L25.806 31.237L12.554 38.452L27.115 23.152L34.104 30.241L47.204 23.152L32.73 38.452Z"
      />
      <defs>
        <linearGradient
          id="normal-messenger"
          x1="29.999"
          y1="8.672"
          x2="29.999"
          y2="56.624"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#aaa" />
          <stop offset="1" stop-color="#aaa" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient
          id="colorful-messenger"
          x1="29.999"
          y1="8.672"
          x2="29.999"
          y2="56.624"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00C6FF" />
          <stop offset="1" stop-color="#0068FF" />
        </linearGradient>
      </defs>
    </svg>
  `;const whatsappSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.131 10.8467C44.5436 6.21119 38.4251 3.4049 31.9191 2.9524C25.4132 2.4999 18.9651 4.43214 13.7801 8.38795C8.59512 12.3438 5.02815 18.0524 3.74594 24.4468C2.46373 30.8412 3.55405 37.4837 6.81305 43.1327L2.99902 56.9987L17.252 53.2777C21.1974 55.4153 25.6138 56.5348 30.101 56.5347H30.112C37.223 56.5413 44.0464 53.7282 49.0865 48.7119C54.1266 43.6956 56.972 36.8856 56.999 29.7747C57.0086 26.2552 56.318 22.769 54.9672 19.5191C53.6164 16.2692 51.6325 13.3204 49.131 10.8447V10.8467ZM30.112 52.0157H30.103C26.1029 52.0167 22.1755 50.9463 18.729 48.9157L17.913 48.4337L9.45505 50.6417L11.713 42.4347L11.182 41.5937C8.53242 37.3992 7.35245 32.443 7.82779 27.5046C8.30313 22.5662 10.4068 17.926 13.8078 14.3139C17.2089 10.7019 21.7142 8.32308 26.6151 7.55171C31.516 6.78033 36.5342 7.66018 40.8804 10.0528C45.2265 12.4455 48.6538 16.2152 50.6232 20.7688C52.5925 25.3224 52.9921 30.4015 51.759 35.207C50.526 40.0126 47.7302 44.2718 43.8117 47.3146C39.8932 50.3575 35.0743 52.0112 30.113 52.0157H30.112ZM42.37 35.3587C41.698 35.0237 38.395 33.4067 37.779 33.1837C37.163 32.9607 36.715 32.8487 36.267 33.5187C35.819 34.1887 34.532 35.6937 34.14 36.1397C33.748 36.5857 33.3561 36.6397 32.6841 36.3067C30.7054 35.522 28.8782 34.3993 27.284 32.9887C25.816 31.6381 24.5566 30.0771 23.547 28.3567C23.155 27.6877 23.505 27.3257 23.842 26.9917C24.142 26.6917 24.514 26.2107 24.85 25.8207C25.1263 25.4828 25.3526 25.107 25.522 24.7047C25.6112 24.5204 25.6528 24.3166 25.6431 24.112C25.6333 23.9075 25.5724 23.7087 25.466 23.5337C25.298 23.1987 23.9551 19.9077 23.3951 18.5697C22.8501 17.2697 22.295 17.4427 21.883 17.4217C21.492 17.4027 21.043 17.3987 20.595 17.3987C20.255 17.4075 19.9204 17.4864 19.6123 17.6304C19.3041 17.7745 19.029 17.9805 18.804 18.2357C18.0453 18.9504 17.4443 19.8158 17.0394 20.7764C16.6346 21.7369 16.4348 22.7715 16.453 23.8137C16.453 27.1047 18.86 30.2837 19.196 30.7297C19.532 31.1757 23.933 37.9297 30.672 40.8297C31.9231 41.366 33.2015 41.8359 34.502 42.2377C35.8732 42.6524 37.3219 42.7431 38.734 42.5027C40.025 42.3107 42.709 40.8857 43.269 39.3237C43.7085 38.3253 43.8448 37.2199 43.661 36.1447C43.493 35.8657 43.045 35.6987 42.373 35.3637L42.37 35.3587Z"
      />
    </svg>
  `;const snapchatSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9671 56.0002C35.2401 56.0002 39.1861 52.2003 39.1861 52.2003C39.5331 51.9173 39.9271 51.6462 39.9271 51.6462C43.0841 49.6192 48.2021 51.0803 48.2021 51.0803C50.0621 51.5103 50.1151 50.1372 50.1151 50.1372L50.2581 48.5812C50.3941 47.0562 52.7931 47.0722 52.7931 47.0722C55.9521 46.9512 57.2821 45.6873 57.8301 44.7953C58.4181 43.9403 57.3071 43.6953 57.3071 43.6953C49.6841 41.6153 45.9851 34.5443 45.9851 34.5443C44.2631 31.5903 46.6231 30.3952 46.6231 30.3952C47.8423 29.8272 49.0993 29.3441 50.3851 28.9492C52.9641 27.9382 52.1071 26.1833 52.1071 26.1833C51.1501 24.2973 48.9181 25.5543 48.9181 25.5543C48.3524 25.8708 47.7172 26.0425 47.0691 26.0543C45.3061 26.0873 45.0941 25.7183 45.0941 25.7183L45.1551 17.5363C45.1551 10.0543 38.4031 3.98926 30.0731 3.98926H29.9281C21.5981 3.98926 14.8461 10.0543 14.8461 17.5363L14.9061 25.7183C14.9061 25.7183 14.6941 26.0873 12.9311 26.0543C12.283 26.0425 11.6478 25.8707 11.0821 25.5543C11.0821 25.5543 8.85006 24.2973 7.89406 26.1833C7.89406 26.1833 7.03711 27.9382 9.61611 28.9492C10.9019 29.344 12.1589 29.8272 13.3781 30.3952C13.3781 30.3952 15.7381 31.5893 14.0161 34.5443C14.0161 34.5443 10.3161 41.6153 2.69509 43.6953C2.69509 43.6953 1.58308 43.9363 2.17208 44.7953C2.72008 45.6873 4.05009 46.9512 7.20809 47.0722C7.20809 47.0722 9.60806 47.0562 9.74306 48.5812L9.88711 50.1372C9.88711 50.1372 9.94107 51.5103 11.8001 51.0803C11.8001 51.0803 16.9181 49.6192 20.0741 51.6462C20.0741 51.6462 20.4691 51.9173 20.8161 52.2003C20.8161 52.2003 24.7621 56.0002 30.0351 56.0002H29.9671Z"
      />
    </svg>
  `;const lineSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 6C13.984 6 1 16.342 1 29.1C1 40.472 11.316 49.924 24.9 51.844H24.906C25.225 51.889 25.547 51.929 25.87 51.965C30.495 52.923 26.486 58.682 28.001 59.859C29.743 61.213 42.943 52.435 50.963 45.059C52.1049 44.111 53.1604 43.0636 54.117 41.929L54.134 41.911C54.3287 41.7015 54.5082 41.4782 54.671 41.243C57.4376 37.7956 58.9629 33.5171 59.001 29.097C59 16.342 46.015 6 30 6ZM20.535 34.964C20.5316 35.3628 20.3708 35.7442 20.0876 36.0251C19.8045 36.306 19.4218 36.4637 19.023 36.464H13.174C12.7751 36.4637 12.3925 36.306 12.1093 36.0251C11.8262 35.7442 11.6654 35.3628 11.662 34.964V23.805C11.6654 23.4062 11.8262 23.0248 12.1093 22.7439C12.3925 22.463 12.7751 22.3052 13.174 22.305H13.3C13.6988 22.3052 14.0815 22.463 14.3646 22.7439C14.6478 23.0248 14.8086 23.4062 14.812 23.805V33.334H19.022C19.4209 33.3342 19.8035 33.492 20.0866 33.7729C20.3698 34.0538 20.5306 34.4351 20.534 34.834L20.535 34.964ZM24.907 34.964C24.9036 35.3628 24.7428 35.7442 24.4596 36.0251C24.1765 36.306 23.7938 36.4637 23.395 36.464H23.269C22.87 36.464 22.4871 36.3064 22.2037 36.0255C21.9203 35.7445 21.7594 35.363 21.756 34.964V23.805C21.7594 23.406 21.9203 23.0245 22.2037 22.7435C22.4871 22.4626 22.87 22.305 23.269 22.305H23.395C23.7938 22.3052 24.1765 22.463 24.4596 22.7439C24.7428 23.0248 24.9036 23.4062 24.907 23.805V34.964ZM38.607 34.964C38.6061 35.3595 38.449 35.7387 38.17 36.019V36.019C38.0683 36.1358 37.9424 36.229 37.801 36.292C37.5833 36.4077 37.3405 36.4681 37.094 36.468H36.968C36.7711 36.4682 36.5761 36.4299 36.394 36.355C36.1596 36.2718 35.9547 36.1216 35.805 35.923C35.7649 35.875 35.7279 35.8246 35.694 35.772L30.188 28.291V34.964C30.1846 35.3628 30.0238 35.7442 29.7406 36.0251C29.4575 36.306 29.0749 36.4637 28.676 36.464H28.55C28.151 36.464 27.7681 36.3064 27.4847 36.0255C27.2013 35.7445 27.0404 35.363 27.037 34.964V23.805C27.0404 23.406 27.2013 23.0245 27.4847 22.7435C27.7681 22.4626 28.151 22.305 28.55 22.305H28.676C28.9424 22.3054 29.204 22.3759 29.4345 22.5095C29.665 22.6431 29.8562 22.835 29.989 23.066L35.456 30.36V23.81C35.4594 23.4112 35.6202 23.0298 35.9034 22.7489C36.1865 22.468 36.5691 22.3102 36.968 22.31H37.094C37.493 22.31 37.8759 22.4676 38.1593 22.7485C38.4426 23.0295 38.6036 23.411 38.607 23.81V34.964ZM49.417 23.957C49.4136 24.356 49.2526 24.7375 48.9693 25.0185C48.6859 25.2994 48.303 25.457 47.904 25.457H43.694V27.839H47.904C48.303 27.839 48.6859 27.9966 48.9693 28.2775C49.2526 28.5585 49.4136 28.94 49.417 29.339V29.465C49.4138 29.8641 49.253 30.2457 48.9696 30.5267C48.6861 30.8077 48.3031 30.9653 47.904 30.965H43.694V33.347H47.904C48.303 33.347 48.6859 33.5046 48.9693 33.7856C49.2526 34.0665 49.4136 34.448 49.417 34.847V34.973C49.4136 35.372 49.2526 35.7535 48.9693 36.0345C48.6859 36.3154 48.303 36.473 47.904 36.473H42.055C41.6561 36.4727 41.2735 36.315 40.9904 36.0341C40.7072 35.7532 40.5464 35.3718 40.543 34.973V23.832C40.5464 23.4332 40.7072 23.0518 40.9904 22.7709C41.2735 22.49 41.6561 22.3322 42.055 22.332H47.904C48.303 22.332 48.6859 22.4896 48.9693 22.7705C49.2526 23.0515 49.4136 23.433 49.417 23.832V23.957Z"
      />
    </svg>
  `;const instagramSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.8497 19.6928C54.728 17.0316 54.3053 15.2143 53.6874 13.6243C53.0598 11.9562 52.0757 10.4451 50.8038 9.1962C49.5553 7.92437 48.0439 6.93979 46.3757 6.31188C44.7854 5.69428 42.9684 5.27199 40.3073 5.15106C37.6412 5.02899 36.7894 5 30 5C23.2106 5 22.3588 5.02899 19.6927 5.1503C17.0316 5.27199 15.2146 5.69466 13.6243 6.31265C11.9561 6.94017 10.4451 7.92437 9.19617 9.1962C7.92435 10.4448 6.93977 11.9558 6.31187 13.624C5.69427 15.2143 5.27199 17.0316 5.15106 19.6924C5.02899 22.3589 5 23.2104 5 29.9998C5 36.7896 5.02899 37.6415 5.15106 40.3076C5.27237 42.9684 5.69504 44.7857 6.31302 46.376C6.94054 48.0438 7.92473 49.5552 9.19655 50.8038C10.4451 52.0756 11.9565 53.0598 13.6246 53.6874C15.2146 54.3057 17.0319 54.728 19.6931 54.8497C22.3595 54.9714 23.211 55 30.0004 55C36.7898 55 37.6416 54.9714 40.3077 54.8497C42.9688 54.728 44.7858 54.3057 46.3761 53.6874C49.7342 52.3888 52.3888 49.7342 53.6874 46.376C54.3057 44.7857 54.728 42.9684 54.8497 40.3076C54.971 37.6411 55 36.7896 55 30.0002C55 23.2104 54.971 22.3589 54.8497 19.6928V19.6928ZM50.3495 40.1027C50.2385 42.5403 49.8311 43.8641 49.4889 44.7449C48.6478 46.9254 46.9247 48.6485 44.7442 49.4896C43.8634 49.8318 42.5397 50.2392 40.1021 50.3502C37.4665 50.4708 36.6757 50.496 30 50.496C23.3239 50.496 22.5335 50.4708 19.8975 50.3502C17.4603 50.2392 16.1366 49.8318 15.2554 49.4896C14.1698 49.0887 13.1875 48.4497 12.3811 47.6193C11.5506 46.8128 10.9116 45.8309 10.5107 44.7449C10.1685 43.8641 9.76112 42.5403 9.65012 40.1027C9.52995 37.4668 9.50439 36.676 9.50439 30.0006C9.50439 23.3248 9.52995 22.5344 9.65012 19.898C9.76151 17.4604 10.1685 16.1367 10.5107 15.2559C10.9116 14.1698 11.551 13.1875 12.3811 12.3811C13.1875 11.5506 14.1698 10.9117 15.2558 10.5111C16.1366 10.1686 17.4603 9.76154 19.8979 9.65015C22.5339 9.52999 23.3247 9.50443 30 9.50443H29.9996C36.675 9.50443 37.4657 9.52999 40.1021 9.65053C42.5397 9.76154 43.863 10.169 44.7442 10.5111C45.8298 10.9121 46.8121 11.551 47.6186 12.3811C48.449 13.1875 49.088 14.1698 49.4885 15.2559C49.8311 16.1367 50.2385 17.4604 50.3495 19.898C50.4697 22.534 50.4952 23.3248 50.4952 30.0002C50.4952 36.676 50.47 37.4664 50.3495 40.1027Z"
      />
      <path
        d="M29.9998 17C22.8202 17 17 22.8206 17 30.0002C17 37.1798 22.8202 43 29.9998 43C37.1798 43 43 37.1798 43 30.0002C43 22.8206 37.1798 17 29.9998 17V17ZM29.9998 38.4387C25.3396 38.4383 21.5613 34.6604 21.5617 29.9998C21.5617 25.3396 25.3396 21.5613 30.0002 21.5613C34.6608 21.5617 38.4387 25.3396 38.4387 29.9998C38.4387 34.6604 34.6604 38.4387 29.9998 38.4387V38.4387Z"
      />
      <path
        d="M46 17.0002C46 18.6569 44.6569 20 43.0002 20C41.3431 20 40 18.6569 40 17.0002C40 15.3431 41.3431 14 43.0002 14C44.6569 14 46 15.3431 46 17.0002V17.0002Z"
      />
      <defs>
        <linearGradient
          id="firstline-normal-instagram"
          x1="9.19591"
          y1="50.804"
          x2="50.8044"
          y2="9.19586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#aaa" />
          <stop offset="0.5" stop-color="#aaa" />
          <stop offset="1" stop-color="#aaa" />
        </linearGradient>
        <linearGradient
          id="firstline-colorful-instagram"
          x1="9.19591"
          y1="50.804"
          x2="50.8044"
          y2="9.19586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD600" />
          <stop offset="0.5" stop-color="#FF0100" />
          <stop offset="1" stop-color="#D800B9" />
        </linearGradient>
        <linearGradient
          id="secondline-normal-instagram"
          x1="20.8077"
          y1="39.1924"
          x2="39.1924"
          y2="20.8077"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#aaa" />
          <stop offset="0.5" stop-color="#aaa" />
          <stop offset="1" stop-color="#aaa" />
        </linearGradient>
        <linearGradient
          id="secondline-colorful-instagram"
          x1="20.8077"
          y1="39.1924"
          x2="39.1924"
          y2="20.8077"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF6400" />
          <stop offset="0.5" stop-color="#FF0100" />
          <stop offset="1" stop-color="#FD0056" />
        </linearGradient>
        <linearGradient
          id="thirdline-normal-instagram"
          x1="40.8788"
          y1="19.1212"
          x2="45.1213"
          y2="14.8788"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#aaa" />
          <stop offset="1" stop-color="#aaa" />
        </linearGradient>
        <linearGradient
          id="thirdline-colorful-instagram"
          x1="40.8788"
          y1="19.1212"
          x2="45.1213"
          y2="14.8788"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F30072" />
          <stop offset="1" stop-color="#E50097" />
        </linearGradient>
      </defs>
    </svg>
  `;const telegramSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.07502 27.9761C5.07502 27.9761 26.809 19.056 34.347 15.915C37.237 14.659 47.036 10.639 47.036 10.639C47.036 10.639 51.559 8.88002 51.182 13.152C51.056 14.911 50.051 21.067 49.046 27.725C47.538 37.147 45.905 47.449 45.905 47.449C45.905 47.449 45.654 50.339 43.518 50.841C41.382 51.343 37.865 49.0821 37.237 48.5801C36.737 48.2031 27.815 42.55 24.548 39.786C23.669 39.032 22.664 37.525 24.674 35.766C29.197 31.62 34.599 26.466 37.865 23.203C39.373 21.695 40.88 18.178 34.599 22.449C25.679 28.605 16.885 34.384 16.885 34.384C16.885 34.384 14.875 35.64 11.106 34.51C7.33702 33.38 2.94004 31.872 2.94004 31.872C2.94004 31.872 -0.0749743 29.987 5.07603 27.977L5.07502 27.9761Z"
      />
    </svg>
  `;const mailSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85802 12.9999H53.143C53.4758 12.9947 53.8074 13.0392 54.127 13.1319L35.169 31.6829C33.7811 33.0279 31.9242 33.78 29.9915 33.78C28.0588 33.78 26.202 33.0279 24.814 31.6829L5.87402 13.1319C6.19362 13.0392 6.52528 12.9947 6.85802 12.9999Z"
      />
      <path
        d="M3.13502 15.8139L17.635 29.9999L3.13502 44.1859C3.04054 43.8742 2.99499 43.5496 3.00002 43.2239V16.7769C2.99489 16.4509 3.04043 16.126 3.13502 15.8139Z"
      />
      <path
        d="M56.865 15.8139C56.9596 16.126 57.0052 16.4509 57 16.7769V43.2239C57.0052 43.55 56.9596 43.8749 56.865 44.1869L42.343 29.9999L56.865 15.8139Z"
      />
      <path
        d="M20.358 32.6629L22.076 34.3629C24.1992 36.4094 27.0331 37.5529 29.982 37.5529C32.9309 37.5529 35.7649 36.4094 37.888 34.3629L39.624 32.6629L54.124 46.8629C53.8044 46.9557 53.4728 47.0002 53.14 46.9949H6.85802C6.52528 47.0002 6.19362 46.9557 5.87402 46.8629L20.358 32.6629Z"
      />
    </svg>
  `;const phoneSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.952 36.4829C40.5723 36.2612 40.14 36.1454 39.7003 36.1477C39.2605 36.15 38.8294 36.2702 38.452 36.4959L34.538 38.8279C34.1132 39.0844 33.6206 39.2059 33.1252 39.1763C32.6299 39.1466 32.1552 38.9673 31.764 38.6619C29.8146 37.1528 27.9545 35.5317 26.193 33.8069C24.4682 32.0455 22.8472 30.1853 21.338 28.2359C21.0327 27.8448 20.8533 27.3701 20.8237 26.8747C20.794 26.3794 20.9155 25.8867 21.172 25.4619L23.5 21.5479C23.7265 21.1685 23.8469 20.7352 23.8487 20.2933C23.8505 19.8514 23.7335 19.4172 23.51 19.0359L17.767 9.22593C17.4972 8.76444 17.0854 8.40265 16.5929 8.19465C16.1005 7.98664 15.554 7.94359 15.035 8.07193C13.5809 8.46583 12.2652 9.25667 11.235 10.3559C6.80603 14.7829 4.45503 22.2499 21.1 38.8999C37.745 55.5499 45.212 53.1999 49.64 48.7689C50.7401 47.7355 51.5315 46.4168 51.926 44.9599C52.0541 44.4434 52.0114 43.8993 51.8045 43.409C51.5976 42.9187 51.2375 42.5085 50.778 42.2399C48.417 40.8539 43.316 37.8679 40.952 36.4829Z"
      />
    </svg>
  `;const linkSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.348 8.01194C38.4939 8.17432 35.8029 9.3952 33.801 11.4359L25.665 19.5679C26.943 18.2839 31.686 19.1679 32.837 20.3179L37.761 15.3959C38.7736 14.3296 40.1482 13.6804 41.615 13.5759C42.2573 13.5363 42.9007 13.6353 43.5013 13.8663C44.102 14.0974 44.6459 14.455 45.096 14.9149C45.5255 15.342 45.8652 15.8507 46.095 16.4111C46.3248 16.9715 46.4401 17.5723 46.434 18.1779C46.4125 18.9421 46.2407 19.6945 45.9282 20.3922C45.6157 21.0899 45.1688 21.7191 44.613 22.2439L36.048 30.8559C33.893 33.0099 30.615 33.1829 28.715 31.2839C28.1899 30.7588 27.4777 30.4638 26.735 30.4638C25.9924 30.4638 25.2801 30.7588 24.755 31.2839C24.2299 31.8091 23.9349 32.5213 23.9349 33.2639C23.9349 34.0066 24.2299 34.7188 24.755 35.2439C25.6966 36.184 26.8154 36.928 28.0464 37.4328C29.2775 37.9376 30.5965 38.1933 31.927 38.1849C33.4249 38.1705 34.9052 37.8606 36.2832 37.2731C37.6611 36.6855 38.9096 35.8318 39.957 34.7609L48.574 26.2009C50.7318 24.0843 51.9636 21.1993 52 18.1769C52.014 16.7965 51.7443 15.4279 51.2076 14.156C50.6708 12.8841 49.8786 11.736 48.8798 10.7829C47.8811 9.82987 46.6972 9.09213 45.4016 8.61547C44.106 8.13881 42.7263 7.93338 41.348 8.01194V8.01194ZM28.073 21.8119C25.033 21.8447 22.1285 23.075 19.99 25.2359L11.426 33.7959C9.26897 35.914 8.03859 38.8001 8.00401 41.8229C7.98985 43.2035 8.25947 44.5722 8.79614 45.8442C9.33281 47.1162 10.1251 48.2644 11.1238 49.2176C12.1226 50.1708 13.3065 50.9086 14.6022 51.3853C15.8978 51.862 17.2777 52.0675 18.656 51.9889C21.5101 51.8265 24.2011 50.6057 26.203 48.5649L34.339 40.4329C33.054 41.7169 28.318 40.8329 27.167 39.6829L22.248 44.6049C21.2336 45.6687 19.86 46.3174 18.394 46.4249C17.7521 46.4647 17.1092 46.3659 16.5089 46.1352C15.9087 45.9045 15.365 45.5473 14.915 45.0879C14.4855 44.6604 14.1459 44.1513 13.9159 43.5906C13.686 43.0299 13.5704 42.4289 13.576 41.8229C13.5975 41.0588 13.7694 40.3064 14.0818 39.6087C14.3943 38.911 14.8412 38.2818 15.397 37.7569L23.961 29.1439C26.116 26.9899 29.394 26.8239 31.294 28.7159C31.8262 29.2029 32.5258 29.4657 33.247 29.4496C33.9682 29.4334 34.6553 29.1395 35.1652 28.6292C35.675 28.1188 35.9682 27.4314 35.9836 26.7102C35.9991 25.989 35.7355 25.2896 35.248 24.7579C34.3062 23.8182 33.1877 23.0743 31.9569 22.5692C30.7261 22.0641 29.4074 21.8077 28.077 21.8149L28.073 21.8119Z"
      />
    </svg>
  `;const smsSVG=`
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 61 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.3213 8.00002H21.5619C18.9926 7.9963 16.4439 8.45855 14.0396 9.36436C13.6623 9.50342 13.2914 9.65446 12.9268 9.81748C9.27541 11.4288 6.14152 14.0196 3.87242 17.3029C3.67281 17.5863 3.48318 17.8758 3.29953 18.1712C3.29311 18.1798 3.28775 18.1892 3.28357 18.1991C1.24373 21.474 0.114287 25.2336 0.0116992 29.0904C-0.0908883 32.9472 0.837093 36.7616 2.69996 40.1402C4.56282 43.5189 7.29314 46.3395 10.6094 48.3113C13.9257 50.2831 17.7078 51.3346 21.5659 51.3575H24.4603L24.8316 58.8539C24.8072 59.0352 24.8373 59.2196 24.9181 59.3837C24.9989 59.5477 25.1267 59.6841 25.2852 59.7753C25.4437 59.8665 25.6258 59.9084 25.8083 59.8958C25.9907 59.8831 26.1653 59.8165 26.3097 59.7043L34.9698 51.3565H38.3273C44.0763 51.3565 49.5899 49.0727 53.6551 45.0075C57.7202 40.9424 60.004 35.4288 60.004 29.6798C60.004 23.9307 57.7202 18.4172 53.6551 14.352C49.5899 10.2868 44.0763 8.00301 38.3273 8.00301L38.3213 8.00002ZM12.9637 36.6632C11.5976 36.685 10.2491 36.3528 9.04933 35.699L8.66308 35.4705L9.61722 32.5492L10.224 32.9484C11.0631 33.4755 12.0281 33.7685 13.0186 33.7967C14.2622 33.7967 14.9738 33.2977 14.9738 32.4234C14.9738 31.6879 14.6574 31.1978 12.9328 30.5581C9.80486 29.4372 9.14913 27.6527 9.14913 26.3493C9.14913 23.8152 11.259 21.9758 14.1674 21.9758C15.3788 21.9636 16.5724 22.2684 17.6296 22.8601L18.0208 23.0926L17.0567 25.9111L16.4579 25.5338C15.7515 25.0994 14.9387 24.869 14.1095 24.8681C13.1334 24.8681 12.5016 25.3442 12.5016 26.0808C12.5016 26.6986 12.794 27.0689 14.5975 27.7605C16.3451 28.4292 18.3492 29.539 18.3492 32.2048C18.3562 34.9146 16.2353 36.6632 12.9637 36.6632ZM39.8373 36.3947H36.426V28.4751C36.426 26.1906 35.6695 25.0328 34.1774 25.0328C33.6652 25.0609 33.1742 25.2462 32.7711 25.5634C32.3681 25.8805 32.0725 26.3142 31.9247 26.8054C31.8231 27.1284 31.7706 27.4648 31.7691 27.8034V36.3937H28.3577V28.046C28.3577 27.1397 28.1491 25.0338 26.2159 25.0338C25.6636 25.0761 25.138 25.2885 24.7116 25.6419C24.2851 25.9953 23.9787 26.4722 23.8345 27.007C23.7217 27.3229 23.6669 27.6566 23.6728 27.9921V36.3947H20.2625V26.3493C20.2625 24.9041 20.2305 23.8651 20.1567 22.872L20.1128 22.2732H23.2976L23.3594 23.4649C23.8317 22.9765 24.4007 22.592 25.0301 22.3361C25.6594 22.0802 26.3352 21.9585 27.0143 21.9788C27.7679 21.9705 28.5106 22.1588 29.1692 22.5252C29.8278 22.8915 30.3795 23.4231 30.77 24.0677C31.0767 23.6677 31.4351 23.3103 31.8359 23.0048C32.7483 22.3009 33.8781 21.938 35.0297 21.9788C37.2464 21.9788 39.8353 23.6026 39.8353 28.1797L39.8373 36.3947ZM45.8257 36.6632C44.4589 36.6853 43.1096 36.3531 41.9093 35.699L41.523 35.4705L42.4782 32.5492L43.086 32.9484C43.925 33.4759 44.89 33.7688 45.8806 33.7967C47.1221 33.7967 47.8347 33.2977 47.8347 32.4234C47.8347 31.6879 47.5194 31.1978 45.7937 30.5581C42.6678 29.4372 42.0101 27.6527 42.0101 26.3523C42.0101 23.8182 44.12 21.9788 47.0283 21.9788C48.2395 21.9713 49.4322 22.2759 50.4916 22.8631L50.8808 23.0956L49.9177 25.9141L49.3189 25.5368C48.614 25.1033 47.803 24.8729 46.9754 24.8711C45.9993 24.8711 45.3676 25.3472 45.3676 26.0838C45.3676 26.7016 45.659 27.0709 47.4635 27.7635C49.2101 28.4322 51.2152 29.542 51.2152 32.2078C51.2221 34.9146 49.1053 36.6632 45.8297 36.6632H45.8257Z"
      />
    </svg>
  `;const warningSVG=`
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1715_34050)">
      <path d="M10 0.9375C5 0.9375 0.9375 5 0.9375 10C0.9375 15 5 19.0625 10 19.0625C15 19.0625 19.0625 15 19.0625 10C19.0625 5 15 0.9375 10 0.9375ZM10 1.875C14.4844 1.875 18.125 5.51562 18.125 10C18.125 14.4844 14.4844 18.125 10 18.125C5.51562 18.125 1.875 14.4844 1.875 10C1.875 5.51562 5.51562 1.875 10 1.875ZM10 4.6875C9.62704 4.6875 9.26935 4.83566 9.00563 5.09938C8.74191 5.3631 8.59375 5.72079 8.59375 6.09375C8.59375 6.46671 8.74191 6.8244 9.00563 7.08812C9.26935 7.35184 9.62704 7.5 10 7.5C10.373 7.5 10.7306 7.35184 10.9944 7.08812C11.2581 6.8244 11.4062 6.46671 11.4062 6.09375C11.4062 5.72079 11.2581 5.3631 10.9944 5.09938C10.7306 4.83566 10.373 4.6875 10 4.6875ZM10 9.21875C9.21875 9.21875 8.59375 9.84375 8.59375 10.625V14.375C8.59375 15.1562 9.21875 15.7812 10 15.7812C10.7812 15.7812 11.4062 15.1562 11.4062 14.375V10.625C11.4062 9.84375 10.7812 9.21875 10 9.21875Z" fill="#F1C40F"/>
      </g>
      <defs>
      <clipPath id="clip0_1715_34050">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
    </svg>
`;function formatAMPM(date){var hours=date.getHours();var minutes=date.getMinutes();var ampm=hours>=12?"pm":"am";hours=hours%12;hours=hours?hours:12;minutes=minutes<10?"0"+minutes:minutes;var strTime=hours+":"+minutes+" "+ampm;return strTime;}
let createPopUp=function(){let activeService=content.services[0].name;if(typeof conDivObj==="undefined"){conDivObj=document.createElement("DIV");conDivObj.setAttribute("id","freechatpopup");}
if(content.position==="right"){conDivObj.style.left="unset";conDivObj.style.right=0;conDivObj.style.alignItems="flex-end";}else if(content.position==="left"){conDivObj.style.right="unset";conDivObj.style.left=0;conDivObj.style.alignItems="flex-start";}
conDivObj.innerHTML=`
      <div class="freechat-popup ${content.show&&"freechat-popup-show"}" id="freechat-popup">
        <div class="freechat-popup-header" style="background-color: ${
content.color
}20">
          <div class="freechat-popup-top">
            <img src="${content.logo}" />
            <h1>${content.title}</h1>
          </div>
          <div class="freechat-popup-bottom">
            ${content.services.map((item)=>`<span class="fc-icon fc-icon-${item.name}${
item.name===activeService?" active":""
}" id="fc-icon-${item.name}">
                    <p class="icon-hover-message" style="background-color: ${
content.color
}">${content.withText} ${item.name.charAt(0).toUpperCase()+
item.name.slice(1)}</p>
                    ${item.name==="whatsapp"?whatsappSVG:""}
                    ${item.name==="telegram"?telegramSVG:""}
                    ${item.name==="messenger"?messengerSVG:""}
                    ${item.name==="snapchat"?snapchatSVG:""}
                    ${item.name==="line"?lineSVG:""}
                    ${item.name==="instagram"?instagramSVG:""}
                    ${item.name==="mail"?mailSVG:""}
                    ${item.name==="sms"?smsSVG:""}
                    ${item.name==="phone"?phoneSVG:""}
                    ${item.name==="link"?linkSVG:""}
                  </span>`).join("")}
          </div>
        </div>
        <div class="freechat-popup-content">
          <img src="${content.person}" />
          <p style="background-color: ${content.color}20">${content.message}</p>
          <span>${formatAMPM(new Date())}</span>
        </div>
        <div id="freechat-popup-message">
        </div>
        <div class="freechat-popup-credit">
          <a class="freechat-popup-credit-popupsmart" href="https://popupsmart.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 60 60" fill="currentColor"><path id="popupsmart" d="M56.627,12.279a22.441,22.441,0,0,0-9.549-9.074c-4.122-2.088-8.951-3.2-15.722-3.2H28.644c-6.769,0-11.6,1.112-15.72,3.2a22.425,22.425,0,0,0-9.551,9.072C1.174,16.191,0,20.783,0,27.214v5.578c0,6.434,1.173,11.024,3.373,14.934A22.412,22.412,0,0,0,12.924,56.8c4.12,2.094,8.949,3.206,15.72,3.206h2.711c6.771,0,11.6-1.112,15.72-3.206a22.427,22.427,0,0,0,9.551-9.072c2.2-3.91,3.373-8.5,3.373-14.934V27.216C60,20.78,58.827,16.19,56.627,12.279ZM30,45.006c-.237,0-.473-.005-.708-.015l-.211-.012c-.14-.008-.28-.019-.419-.031-.123-.011-.245-.022-.367-.036l-.191-.024a14.979,14.979,0,0,1-2.672-.59V44.3a14.861,14.861,0,0,1-6.294-3.955,1.406,1.406,0,1,0-2.036,1.94,17.648,17.648,0,0,0,8.33,4.944v.354a5.214,5.214,0,1,1-10.428,0V30.046c0-.013,0-.026,0-.039a15,15,0,1,1,15,15Z" transform="translate(0 -0.005)"></path></svg><span>Powered by Popupsmart</span></a>
          <div class="livechatai-wrapper">
            <button class="livechatai-tooltip">
              <span class="livechatai-tooltip-content-wrapper ">
                <span class="livechatai-tooltip-content">
                Dear Website Administrator,<br/><br/>
                Enjoying FreeChat? We've now upgraded it to <a href="https://livechatai.com?utm_source=freechat&utm_medium=credit&utm_campaign=freechat" target="_blank">LiveChatAi.com</a>, providing you with even more features. Register for free at our site to enjoy these new enhancements and remove the current tag.<br/><br/>
                Details about migration:<br/>
                <a href="https://livechatai.com/free-live-chat" target="_blank">https://livechatai.com/free-live-chat</a>
               </span>
              </span>
              ${warningSVG}
            </button>
            <a class="freechat-popup-credit-livechatai" href="https://livechatai.com?utm_source=freechat&utm_medium=credit&utm_campaign=freechat" target="_blank"><span>AI bot & live chat for Website</span><img src="https://popupsmart.com/images/livechatai.png"/></a>
          </div>
        </div>
      </div>
      <div class="freechat-bottom">
        <p class="freechat-bottom-cta ${content.position==="left"&&"freechat-bottom-cta-left"} ${content.position==="right"&&"freechat-bottom-cta-right"}" id="freechat-bottom-cta">${
content.button
}</p>
        <span class="freechat-icon" id="freechat-icon" style="background-color: ${
content.color
}; color: ${content.color}90">
          ${freechatIconSVG}
        </span>
      </div>
    `;document.body.appendChild(conDivObj);const freechatInput=`
      <div class="freechat-popup-input">
        <input type="text" id="freechat-popup-input" placeholder="${content.placeholder}" />
        <svg id="freechat-popup-input-svg"  width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6868 12.2663C23.6138 12.1964 23.5314 12.1371 23.4418 12.0903C23.4148 12.0763 23.3898 12.0623 23.3618 12.0503L1.50981 1.08978C1.31172 1.0015 1.09184 0.974141 0.878155 1.01117C0.664466 1.0482 0.466627 1.14795 0.30981 1.29773C0.181472 1.42162 0.0880969 1.57716 0.0391107 1.74867C-0.00987548 1.92017 -0.0127391 2.10155 0.0308099 2.27451L1.07181 11.0336L18.9718 12.9931L1.07181 14.9527L0.0318103 23.7107C-0.0127844 23.8844 -0.0104536 24.0668 0.0385652 24.2393C0.0875841 24.4118 0.181534 24.5682 0.310811 24.6925C0.467627 24.8423 0.665467 24.942 0.879156 24.9791C1.09284 25.0161 1.31272 24.9887 1.51081 24.9005V24.9005L23.3808 13.9329L23.4418 13.9029C23.5314 13.8561 23.6138 13.7968 23.6868 13.727C23.7855 13.6326 23.864 13.5192 23.9176 13.3937C23.9712 13.2682 23.9989 13.1331 23.9989 12.9966C23.9989 12.8601 23.9712 12.725 23.9176 12.5995C23.864 12.474 23.7855 12.3606 23.6868 12.2663V12.2663Z" />
        </svg>
      </div>
    `;const freechatNotInput=`
      <div class="freechat-popup-notinput">
        <span class="freechat-popup-notinput-icon" id="freechat-popup-notinput-icon">

        </span>
        <p id="freechat-popup-notinput-message"></p>
        <a href="#" id="freechat-popup-notinput-button" target="_blank" style="background-color: ${content.color}">${content.connect}</a>
        <div class="freechat-popup-notinput-information">
          <span>i</span>${content.viaWhatsapp}
        </div>

      </div>
    `;function serviceSeletor(){const service={};content.services.map((i)=>{service[i.name]=i.content;});if(activeService==="whatsapp"){document.getElementById("freechat-popup-message").innerHTML=freechatInput;const input=document.getElementById("freechat-popup-input");const inputSvg=document.getElementById("freechat-popup-input-svg");input.addEventListener("input",(e)=>{input.value.length>0?(inputSvg.style.color=content.color):(inputSvg.style.color="#CCCCCC");});input.addEventListener("keypress",(e)=>{if(e.key==="Enter"){window.open(`https://wa.me/${service.whatsapp}?text=${input.value}!`,"_blank");}});inputSvg.addEventListener("click",function(){window.open(`https://wa.me/${service.whatsapp}?text=${input.value}!`,"_blank");});}else{document.getElementById("freechat-popup-message").innerHTML=freechatNotInput;document.getElementById("freechat-popup-notinput-icon").innerHTML=`
          <span class="fc-icon-${activeService}-2">
            ${activeService==="telegram"?telegramSVG:""}
            ${activeService==="messenger"?messengerSVG:""}
            ${activeService==="snapchat"?snapchatSVG:""}
            ${activeService==="line"?lineSVG:""}
            ${activeService==="instagram"?instagramSVG:""}
            ${activeService==="mail"?mailSVG:""}
            ${activeService==="sms"?smsSVG:""}
            ${activeService==="phone"?phoneSVG:""}
            ${activeService==="link"?linkSVG:""}
          </span>
        `;document.getElementById("freechat-popup-notinput-message").innerHTML=`${content.gty} ${activeService.charAt(0).toUpperCase()+
activeService.slice(1)} ${content.awu}`;let urlSelector;if(activeService==="telegram"){urlSelector="https://t.me/"+service.telegram;}
if(activeService==="messenger"){urlSelector="https://facebook.com/"+service.messenger;}
if(activeService==="snapchat"){urlSelector="https://snapchat.com/add/"+service.snapchat;}
if(activeService==="line"){urlSelector="https://line.me/R/ti/p/"+service.line;}
if(activeService==="instagram"){urlSelector="https://instagram.com/"+service.instagram;}
if(activeService==="mail"){urlSelector="mailto:"+service.mail;}
if(activeService==="sms"){urlSelector="sms:"+service.sms;}
if(activeService==="phone"){urlSelector="tel:"+service.phone;}
if(activeService==="link"){urlSelector=service.link;}
document.getElementById("freechat-popup-notinput-button").href=urlSelector;}}
serviceSeletor();const freechatIcon=document.getElementById("freechat-icon");freechatIcon.addEventListener("click",function(){document.getElementById("freechat-popup").classList.toggle("freechat-popup-show");});if(window.innerWidth>=720){freechatIcon.addEventListener("mouseenter",function(){freechatIcon.innerHTML=pencilSVG;document.getElementById("freechat-bottom-cta").classList.add("freechat-bottom-cta-show");});freechatIcon.addEventListener("mouseleave",function(){freechatIcon.innerHTML=freechatSVG;document.getElementById("freechat-bottom-cta").classList.remove("freechat-bottom-cta-show");});}
content.services.map((item)=>{document.getElementById(`fc-icon-${item.name}`).addEventListener("click",function(){activeService=item.name;serviceSeletor();content.services.map((i)=>{document.getElementById(`fc-icon-${i.name}`).classList.remove("active");});document.getElementById(`fc-icon-${item.name}`).classList.add("active");});});};this.init=function(param){if(typeof param==="object"){if("show"in param)content.show=param.show;if("logo"in param&&param.logo!==null)content.logo=param.logo;if("logo"in param&&param.logo===null){content.logo="https://d2r80wdbkwti6l.cloudfront.net/Cz74LbbmsqGrFmpcWlqJaQpx6GJwZyEz.jpg";}
if("person"in param&&param.person!==null)
content.person=" "+param.person;if("person"in param&&param.person===null){content.person="https://d2r80wdbkwti6l.cloudfront.net/ejRUGogUHC4UBHTOImcA90xWBT3ouySZ.jpg";}
if("title"in param)content.title=" "+param.title;if("message"in param)content.message=" "+param.message;if("color"in param)content.color=param.color;if("position"in param)content.position=param.position;if("button"in param)content.button=param.button;if("placeholder"in param)content.placeholder=param.placeholder;if("withText"in param)content.withText=param.withText;if("viaWhatsapp"in param)content.viaWhatsapp=param.viaWhatsapp;if("gty"in param)content.gty=param.gty;if("awu"in param)content.awu=param.awu;if("connect"in param)content.connect=param.connect;if("track"in param)content.track=param.track;if("device"in param)content.device=param.device;if("services"in param)content.services=param.services;if(typeof window!="undefined"){if(param.device==="mobile"&&window.innerWidth<=720){createPopUp();}else if(param.device==="desktop"&&window.innerWidth>=720){createPopUp();}else if(param.device==="everywhere"){createPopUp();}}}};}
window.start=new Pop();
