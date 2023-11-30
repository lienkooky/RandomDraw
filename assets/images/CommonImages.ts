const blankSvg = '<svg width="14" height="14" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg" />';

interface IOptions {
  checked?: boolean;
  type?: string;
  direction?: string;
}
/**
 * 공통 사용 이미지 중 색상, 크기가 여러 형태로 표현되어야 하는 이미지를 data svg 로 사용할 수 있도록 합니다.
 */
const ImageData: {[index: string]: (color: string, option?: IOptions) => string} = {
  close(color: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 19" fill="none">
              <path d="M17 17.5L1 1.50002" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M1 17.5L17 1.50002" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`;
  },
  tooltip() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="#8B8E9B"/>
    <path d="M8.37656 9.9395H7.15556V9.54333C7.15556 8.54233 7.77156 8.1685 8.35456 7.7175C8.84956 7.3215 9.30056 6.9475 9.30056 6.3095C9.30056 5.5615 8.83856 5.0665 8.06856 5.0665C7.28756 5.0665 6.74856 5.6495 6.74856 6.4965H5.35156C5.35156 4.9235 6.50656 3.8125 8.10156 3.8125C9.74056 3.8125 10.7306 4.7585 10.7306 6.2215C10.7306 7.3985 9.97156 7.9595 9.33356 8.4105C8.79456 8.7955 8.37656 8.98234 8.37656 9.54333V9.9395ZM7.81556 12.1395C7.32056 12.1395 6.92456 11.7435 6.92456 11.2705C6.92456 10.7865 7.32056 10.3905 7.81556 10.3905C8.29956 10.3905 8.70656 10.7865 8.70656 11.2705C8.70656 11.7325 8.29956 12.1395 7.81556 12.1395Z" fill="#8B8E9B"/>
  </svg>`;
  },
  alram(color: string, option?: IOptions): string {
    if (option?.checked) {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9528 0.571429C10.9528 0.255837 10.689 0 10.3637 0C10.0383 0 9.7745 0.255837 9.7745 0.571429V2.30621C5.58287 2.59889 2.27602 5.99072 2.27602 10.1308V14.6218C2.27602 14.8118 2.20819 15.0759 2.06187 15.4027C1.91907 15.7216 1.71963 16.0608 1.49989 16.3895C1.0605 17.0466 0.570236 17.6169 0.379915 17.8314C0.310589 17.9095 0.211885 18.0292 0.142213 18.1871C-0.347375 19.2965 0.483688 20.5714 1.76945 20.5714H6.28126C6.56715 22.5099 8.28598 24 10.3637 24C12.4413 24 14.1602 22.5099 14.4461 20.5714H18.9579C20.2369 20.5714 21.0657 19.31 20.5928 18.2048C20.5179 18.0298 20.4063 17.8991 20.3293 17.8154C20.1311 17.6002 19.646 17.0531 19.214 16.4112C18.998 16.0905 18.8028 15.7568 18.663 15.4376C18.5209 15.1129 18.4513 14.8369 18.4513 14.6218V10.5V10.1299C18.4513 10.0765 18.4507 10.0232 18.4497 9.97006C18.0352 9.92467 17.6359 9.82863 17.2582 9.68825C17.268 9.83424 17.273 9.98151 17.273 10.1299V14.6218C17.273 15.0514 17.405 15.4881 17.5784 15.8842C17.7541 16.2856 17.9881 16.6806 18.2273 17.036C18.7055 17.7465 19.2343 18.342 19.4504 18.5767C19.4739 18.6022 19.4879 18.6193 19.4968 18.6317C19.502 18.6388 19.505 18.644 19.505 18.644C19.6605 19.0098 19.3814 19.4286 18.9579 19.4286H1.76945C1.34337 19.4286 1.06381 19.005 1.22506 18.6378C1.22506 18.6378 1.2277 18.6331 1.2323 18.6266C1.24011 18.6156 1.25238 18.6002 1.27296 18.577C1.47837 18.3455 2.00748 17.7308 2.48854 17.0113C2.72902 16.6516 2.96507 16.2546 3.14269 15.8579C3.31681 15.469 3.45435 15.038 3.45435 14.6218V10.1299C3.45435 6.42888 6.54776 3.42857 10.3637 3.42857C11.4929 3.42857 12.5588 3.6913 13.5 4.15717C13.6815 4.24698 13.8583 4.34435 14.03 4.44884C14.0746 4.04196 14.1681 3.64977 14.3044 3.27824C14.1206 3.17863 13.9325 3.08577 13.7403 3C12.8816 2.61682 11.9418 2.37527 10.9528 2.30621V0.571429ZM10.3637 22.8571C8.93849 22.8571 7.7497 21.8756 7.47676 20.5714H13.2506C12.9776 21.8756 11.7888 22.8571 10.3637 22.8571Z" fill="${color}"/>
    </svg>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3637 0C10.689 0 10.9528 0.255837 10.9528 0.571429V2.30621C15.1445 2.59889 18.4513 5.98983 18.4513 10.1299V14.6218C18.4513 14.8369 18.5209 15.1129 18.663 15.4376C18.8028 15.7568 18.998 16.0905 19.214 16.4112C19.646 17.0531 20.1311 17.6002 20.3293 17.8154C20.4063 17.8991 20.5179 18.0298 20.5928 18.2048C21.0657 19.31 20.2369 20.5714 18.9579 20.5714H14.4461C14.1602 22.5099 12.4413 24 10.3637 24C8.28598 24 6.56715 22.5099 6.28126 20.5714H1.76945C0.483688 20.5714 -0.347375 19.2965 0.142213 18.1871C0.211885 18.0292 0.310589 17.9095 0.379915 17.8314C0.570236 17.6169 1.0605 17.0466 1.49989 16.3895C1.71963 16.0608 1.91907 15.7216 2.06187 15.4027C2.20819 15.0759 2.27602 14.8118 2.27602 14.6218V10.1308L2.86519 10.1299L3.45435 10.1299V14.6218C3.45435 15.038 3.31681 15.469 3.14269 15.8579C2.96507 16.2546 2.72902 16.6516 2.48854 17.0113C2.00748 17.7308 1.47837 18.3455 1.27296 18.577C1.25238 18.6002 1.24011 18.6156 1.2323 18.6266C1.2277 18.6331 1.22506 18.6378 1.22506 18.6378C1.06381 19.005 1.34337 19.4286 1.76945 19.4286H18.9579C19.3814 19.4286 19.6605 19.0098 19.505 18.644C19.505 18.644 19.502 18.6388 19.4968 18.6317C19.4879 18.6193 19.4739 18.6022 19.4504 18.5767C19.2343 18.342 18.7055 17.7465 18.2273 17.036C17.9881 16.6806 17.7541 16.2856 17.5784 15.8842C17.405 15.4881 17.273 15.0514 17.273 14.6218V10.1299C17.273 6.42888 14.1796 3.42857 10.3637 3.42857C6.54776 3.42857 3.45435 6.42888 3.45435 10.1299L2.86519 10.1299L2.27602 10.1308C2.27602 5.99072 5.58287 2.59889 9.7745 2.30621V0.571429C9.7745 0.255837 10.0383 0 10.3637 0ZM13.2506 20.5714H7.47676C7.7497 21.8756 8.93849 22.8571 10.3637 22.8571C11.7888 22.8571 12.9776 21.8756 13.2506 20.5714Z" fill="${color}"/>
  </svg>`;
  },
  refresh() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <mask id="path-1-inside-1_5153_32285" fill="white">
      <path d="M14 8C14 9.32081 13.5642 10.6047 12.7601 11.6526C11.9561 12.7004 10.8287 13.4537 9.55291 13.7956C8.27711 14.1374 6.92416 14.0487 5.7039 13.5433C4.48363 13.0378 3.46425 12.1439 2.80385 11C2.14345 9.85615 1.87893 8.52635 2.05133 7.21684C2.22373 5.90734 2.82341 4.69131 3.75736 3.75736C4.69131 2.82341 5.90734 2.22373 7.21684 2.05133C8.52635 1.87893 9.85615 2.14344 11 2.80385L10.3459 3.93671C9.45147 3.42029 8.41159 3.21344 7.38759 3.34826C6.36358 3.48307 5.41267 3.95201 4.68234 4.68234C3.95201 5.41267 3.48307 6.36358 3.34826 7.38759C3.21344 8.41159 3.42029 9.45147 3.93671 10.3459C4.45313 11.2404 5.25027 11.9395 6.20449 12.3347C7.15872 12.73 8.2167 12.7993 9.21435 12.532C10.212 12.2647 11.0936 11.6756 11.7223 10.8562C12.3511 10.0368 12.6919 9.03284 12.6919 8H14Z"/>
    </mask>
    <path d="M14 8C14 9.32081 13.5642 10.6047 12.7601 11.6526C11.9561 12.7004 10.8287 13.4537 9.55291 13.7956C8.27711 14.1374 6.92416 14.0487 5.7039 13.5433C4.48363 13.0378 3.46425 12.1439 2.80385 11C2.14345 9.85615 1.87893 8.52635 2.05133 7.21684C2.22373 5.90734 2.82341 4.69131 3.75736 3.75736C4.69131 2.82341 5.90734 2.22373 7.21684 2.05133C8.52635 1.87893 9.85615 2.14344 11 2.80385L10.3459 3.93671C9.45147 3.42029 8.41159 3.21344 7.38759 3.34826C6.36358 3.48307 5.41267 3.95201 4.68234 4.68234C3.95201 5.41267 3.48307 6.36358 3.34826 7.38759C3.21344 8.41159 3.42029 9.45147 3.93671 10.3459C4.45313 11.2404 5.25027 11.9395 6.20449 12.3347C7.15872 12.73 8.2167 12.7993 9.21435 12.532C10.212 12.2647 11.0936 11.6756 11.7223 10.8562C12.3511 10.0368 12.6919 9.03284 12.6919 8H14Z" stroke="#8B8E9B" stroke-width="2" mask="url(#path-1-inside-1_5153_32285)"/>
    <path d="M9.56858 1.01703L11.0516 3.58561L8.48297 5.06858" stroke="#8B8E9B" stroke-linecap="round"/>
  </svg>`;
  },
  noDataIcon() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19.5" stroke="#8B8E9B"/>
      <path d="M22.2974 10.5566H18.1617L18.5108 24.1724H21.9483L22.2974 10.5566ZM18.0005 27.9858C17.9737 29.2346 18.9942 30.2417 20.2564 30.2417C21.4514 30.2417 22.4854 29.2346 22.4854 27.9858C22.4854 26.7505 21.4514 25.7434 20.2564 25.7568C18.9942 25.7434 17.9737 26.7505 18.0005 27.9858Z" fill="#8B8E9B"/>
    </svg>
    `;
  },
  mainVisualCircle() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="209" height="115" viewBox="0 0 209 115" fill="none">
    <circle cx="169" cy="40" r="36.5" stroke="#7886FF" class="svg-elem-1">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 169 40" to="360 169 40" dur="5s" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle cx="169" cy="40" r="33.5" stroke="#7C8AFF" stroke-opacity="0.5" class="svg-elem-2"></circle>
    <circle cx="22" cy="93" r="21.5" stroke="#8592FF" stroke-opacity="0.5" class="svg-elem-3"></circle>
    <circle cx="169" cy="40" r="39.5" stroke="#707FFF" stroke-opacity="0.3" class="svg-elem-4"></circle>
    <circle cx="169" cy="40" r="30.75" stroke="#95A0FF" stroke-opacity="0.3" stroke-width="0.5" class="svg-elem-5"></circle>
    <circle cx="22" cy="93" r="19.75" stroke="#707FFF" stroke-opacity="0.3" stroke-width="0.5" class="svg-elem-6"></circle>
    <circle cx="169" cy="40" r="28.85" stroke="#707FFF" stroke-opacity="0.3" stroke-width="0.3" class="svg-elem-7"></circle>
  </svg>`;
  }
};

const CommonImages = {
  get(iconKey: string, color?: string, option?: IOptions): string {
    const data: string = ImageData[iconKey]?.(color || '#201E33', option);
    const svg: string = data || blankSvg;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }
};

export default CommonImages;