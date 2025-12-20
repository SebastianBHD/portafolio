import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/common/header.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/about-me.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/common/footer.jsx';
import MyProjects from './pages/my-projects.jsx';
import LoadingScreen from './components/common/loading-screen.jsx';
import AnimatedBackground from './components/common/primary-animated-bg.jsx';

function App() {
  const location = useLocation();
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || '#9f86c0');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    const colorToImageMap = {
      '#9f86c0': '/images/fondocambio-Photoroom-violet.png',
      '#ff8f33': '/images/fondocambio-Photoroom-orange.png',
      '#4caf50': '/images/fondocambio-Photoroom-green.png',
    };

    const colorMailMap = {
      '#9f86c0': '/svgs/mail-violet.svg',
      '#ff8f33': '/svgs/mail-orange.svg',
      '#4caf50': '/svgs/mail-green.svg',
    };

    const updateSvgBackground = () => {
      const primaryColorRgb = hexToRgb(primaryColor);
      const svgBackground = `
          url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1080' height='560' preserveAspectRatio='none' viewBox='0 0 1080 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1363%26quot%3b)' fill='none'%3e%3cpath d='M275.48%2c432.068C302.29%2c429.76%2c323.879%2c413.381%2c338.47%2c390.772C354.783%2c365.496%2c369.967%2c334.584%2c355.368%2c308.281C340.511%2c281.513%2c306.034%2c275.342%2c275.48%2c277.279C248.522%2c278.988%2c226.498%2c295.009%2c211.403%2c317.41C193.709%2c343.668%2c174.971%2c375.875%2c190.418%2c403.515C206.056%2c431.498%2c243.542%2c434.817%2c275.48%2c432.068' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M206.43%2c285.63C222.611%2c285.879%2c239.231%2c281.109%2c247.92%2c267.457C257.211%2c252.859%2c256.978%2c234.289%2c248.819%2c219.029C240.151%2c202.817%2c224.814%2c189.965%2c206.43%2c189.855C187.886%2c189.744%2c171.648%2c202.033%2c163.156%2c218.518C155.326%2c233.718%2c157.829%2c251.843%2c167.095%2c266.213C175.588%2c279.384%2c190.76%2c285.389%2c206.43%2c285.63' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M911.704%2c584.147C956.27%2c584.758%2c1006.615%2c579.279%2c1028.57%2c540.492C1050.332%2c502.045%2c1026.805%2c457.576%2c1005.14%2c419.074C982.859%2c379.478%2c957.013%2c336.173%2c911.704%2c332.805C861.826%2c329.097%2c814.58%2c359.209%2c790.651%2c403.13C767.648%2c445.35%2c773.529%2c497.397%2c800.256%2c537.364C824.261%2c573.259%2c868.526%2c583.555%2c911.704%2c584.147' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M650.615%2c172.124C665.634%2c172.286%2c679.882%2c165.088%2c687.658%2c152.238C695.716%2c138.921%2c697.622%2c121.649%2c688.999%2c108.691C681.032%2c96.718%2c664.978%2c95.86%2c650.615%2c96.571C637.806%2c97.205%2c625.286%2c101.44%2c618.295%2c112.192C610.621%2c123.995%2c608.25%2c139.062%2c614.932%2c151.453C621.925%2c164.421%2c635.883%2c171.965%2c650.615%2c172.124' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M758.23%2c611.675C787.279%2c609.814%2c816.076%2c601.363%2c831.94%2c576.957C849.312%2c550.23%2c854.274%2c515.756%2c838.629%2c487.982C822.734%2c459.764%2c790.613%2c445.594%2c758.23%2c446.101C726.753%2c446.594%2c699.253%2c464.051%2c682.077%2c490.433C662.886%2c519.909%2c647.411%2c557.796%2c666.119%2c587.581C684.211%2c616.385%2c724.285%2c613.85%2c758.23%2c611.675' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M313.21%2c665.43C367.719%2c668.246%2c430.568%2c662.088%2c457.236%2c614.465C483.576%2c567.429%2c453.116%2c512.73%2c424.197%2c467.234C398.049%2c426.097%2c361.878%2c390.596%2c313.21%2c387.881C259.75%2c384.899%2c204.832%2c406.916%2c178.483%2c453.527C152.466%2c499.549%2c164.477%2c556.194%2c192.842%2c600.807C219.03%2c641.996%2c264.466%2c662.912%2c313.21%2c665.43' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M488.523%2c303.356C503.032%2c302.66%2c513.424%2c291.09%2c520.723%2c278.531C528.071%2c265.889%2c533.778%2c250.696%2c526.502%2c238.013C519.202%2c225.288%2c503.193%2c222.363%2c488.523%2c222.404C473.945%2c222.445%2c458.764%2c225.942%2c450.912%2c238.225C442.508%2c251.371%2c442.689%2c268.385%2c450.492%2c281.897C458.294%2c295.407%2c472.94%2c304.103%2c488.523%2c303.356' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1078.87%2c529.345C1122.174%2c529.448%2c1168.974%2c519.446%2c1190.363%2c481.793C1211.572%2c444.459%2c1198.212%2c397.899%2c1173.48%2c362.799C1152.403%2c332.886%2c1115.454%2c324.393%2c1078.87%2c323.56C1040.254%2c322.681%2c998.666%2c326.688%2c976.491%2c358.314C951.218%2c394.359%2c945.685%2c443.489%2c968.296%2c481.262C990.421%2c518.224%2c1035.792%2c529.242%2c1078.87%2c529.345' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M684.133%2c447.068C715.599%2c447.61%2c747.778%2c435.635%2c763.177%2c408.189C778.314%2c381.21%2c769.135%2c349.188%2c754.268%2c322.06C738.63%2c293.525%2c716.597%2c266.159%2c684.133%2c263.953C648.256%2c261.516%2c612.029%2c279.432%2c595.29%2c311.259C579.429%2c341.417%2c591.011%2c377.032%2c609.665%2c405.547C626.341%2c431.038%2c653.677%2c446.544%2c684.133%2c447.068' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M80.131%2c374.854C94.985%2c373.701%2c102.936%2c359.09%2c110.462%2c346.232C118.108%2c333.168%2c127.789%2c318.66%2c120.917%2c305.173C113.655%2c290.922%2c96.123%2c286.392%2c80.131%2c286.709C64.762%2c287.013%2c50.072%2c293.622%2c42.049%2c306.734C33.664%2c320.437%2c32.541%2c337.648%2c40.38%2c351.671C48.402%2c366.021%2c63.74%2c376.126%2c80.131%2c374.854' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M279.353%2c779.437C340.472%2c782.524%2c396.532%2c740.399%2c422.141%2c684.818C444.565%2c636.15%2c417.048%2c584.754%2c390.5%2c538.208C363.589%2c491.025%2c333.668%2c435.07%2c279.353%2c434.468C224.487%2c433.86%2c188.604%2c486.726%2c163.856%2c535.697C141.953%2c579.039%2c138.741%2c627.671%2c159.536%2c671.555C184.201%2c723.608%2c221.825%2c776.532%2c279.353%2c779.437' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M110.872%2c301.042C136.264%2c301.062%2c159.307%2c285.986%2c171.28%2c263.594C182.62%2c242.384%2c178.613%2c217.378%2c166.811%2c196.422C154.746%2c174.998%2c135.375%2c158.373%2c110.872%2c156.328C82.27%2c153.94%2c50.088%2c160.485%2c36.024%2c185.504C22.132%2c210.217%2c35.214%2c239.707%2c50.628%2c263.5C64.416%2c284.784%2c85.512%2c301.022%2c110.872%2c301.042' fill='rgba(${primaryColorRgb}, 0.43)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1363'%3e%3crect width='1080' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")
    `;
      document.documentElement.style.setProperty('--svg-background', svgBackground);
    };
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--primary-color-rgb', hexToRgb(primaryColor));
    updateSvgBackground();

    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [primaryColor]);

  const changeColor = (color) => {
    setPrimaryColor(color);
    localStorage.setItem('primaryColor', color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="app-container">
        <AnimatedBackground />
        <div className="app-content items-center justify-center w-full relative z-10">
          <Header changeColor={changeColor} />
          <div>
            <Routes>
              <Route path="/portafolio" element={<Home primaryColor={primaryColor} />} />
              <Route path="/about-me" element={<AboutMe color={primaryColor}/>} />
              <Route path="/contact" element={<Contact primaryColor={primaryColor}/>} />
              <Route path="/my-projects" element={<MyProjects />} />
              <Route path="*" element={<Navigate to="/portafolio" replace />} />
            </Routes>
          </div>
          <Footer primaryColor={primaryColor} />
        </div>
      </div>
    </>
  );
}

export default App;
