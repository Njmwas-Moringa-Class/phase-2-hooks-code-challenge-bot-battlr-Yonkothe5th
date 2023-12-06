// import React,{useState} from "react";

// function YourBotArmy() {
//   //your bot army code here...
//   // Add state to track the selected bots in the army
//   const [selectedBots, setSelectedBots] = useState([]);

//   // Function to handle enlisting a bot
//   const enlistBot = (bot) => {
//     // Check if the bot is not already enlisted
//     if (!selectedBots.includes(bot)) {
//       // Update the selected bots state
//       setSelectedBots((prevBots) => [...prevBots, bot]);
//     }
//   };

//   // Function to handle discharging a bot
//   const discharge = (bot) => {
//     // Remove the bot from the selected bots state
//     setSelectedBots((prevBots) => prevBots.filter((selectedBot) => selectedBot !== bot));
//     // Call the dischargeBot function to remove the bot from the army
//     dischargeBot(bot);
//   };

//   // Render the enlisted bots in the army
//   const renderBots = selectedBots.map((bot) => (
//     <div key={bot.id} className="column">
//       <div className="ui card">
//         <div className="content">
//           <div className="header">{bot.name}</div>
//           {/* Include other details you want to display */}
//         </div>
//         <div className="extra content">
//           <button className="ui red button" onClick={() => discharge(bot)}>
//             Discharge
//           </button>
//         </div>
//       </div>
//     </div>
//   ));


//   return (
//     <div className="ui segment inverted olive bot-army">
//       <div className="ui five column grid">
//         <div className="row bot-army-row">
//           {renderBots.length > 0 ? renderBots : "Your Bot Army is empty."}
//           Your Bot Army
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourBotArmy;


import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({selectedBots, releaseFromArmy, dischargeFromService}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Map through selectedBots and render each BotCard */}
          {selectedBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => releaseFromArmy(bot)}
              discharge={dischargeFromService}
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;