import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
        {` 
 ________  ________  ________  ________         ___  ________  ___          
|\\   __  \\|\\   __  \\|\\   __  \\|\\   ___  \\      |\\  \\|\\   __  \\|\\  \\         
\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\     \\ \\  \\ \\  \\|\\  \\ \\  \\        
 \\ \\   ____\\ \\   _  _\\ \\   __  \\ \\  \\\\ \\  \\  __ \\ \\  \\ \\   __  \\ \\  \\       
  \\ \\  \\___|\\ \\  \\\\  \\\\ \\  \\ \\  \\ \\  \\\\ \\  \\|\\  \\\\_\\  \\ \\  \\ \\  \\ \\  \\____  
   \\ \\__\\    \\ \\__\\\\ _\\\\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\________\\ \\__\\ \\__\\ \\_______\\
    \\|__|     \\|__|\\|__|\\|__|\\|__|\\|__| \\|__|\\|________|\\|__|\\|__|\\|_______|
    `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 ____                                        ___      
/\\  _'\\                         __          /\\_ \\     
\\ \\ \\L\\ \\_ __    __      ___   /\\_\\     __  \\//\\ \\    
 \\ \\ ,__/\\''__\\/'__'\\  /' _ '\\ \\/\\ \\  /'__'\\  \\ \\ \\   
  \\ \\ \\/\\ \\ \\//\\ \\L\\.\\_/\\ \\/\\ \\ \\ \\ \\/\\ \\L\\.\\_ \\_\\ \\_ 
   \\ \\_\\ \\ \\_\\\\ \\__/.\\_\\ \\_\\ \\_\\_\\ \\ \\ \\__/.\\_\\/\\____\\
    \\/_/  \\/_/ \\/__/\\/_/\\/_/\\/_/\\ \\_\\ \\/__/\\/_/\\/____/
                               \\ \\____/               
                                \\/___/                
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 2.0)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/pranjalee30">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                 \\^o^/
                ( -_-)  
                <|   |>
                /   \\
                (_/ \\_)

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
