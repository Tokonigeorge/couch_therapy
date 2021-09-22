import React from "react";
import NavTop from "../components/NavTop";
import JournalItem from "../components/JournalItem";

const JournalPage = () => {
  const journalItemInfo = [
    {
      header: "A product manager musing calls",
      date: "14/03",
      sharedWith: "Dr Williams sam",
    },
    {
      header: "qui reprehenderit voluptate amet deserunt dolor esse",
      date: "14/03",
    },
    {
      header: "A product manager musing calls",
      date: "14/03",
      sharedWith: "Dr Williams sam",
    },
    {
      header: "qui reprehenderit voluptate amet deserunt dolor esse",
      date: "14/03",
    },
    {
      header: "A product manager musing calls",
      date: "14/03",
      sharedWith: "Dr Williams sam",
    },
    {
      header: "qui reprehenderit voluptate amet deserunt dolor esse",
      date: "14/03",
    },
  ];
  return (
    <div className="pt-4">
      <NavTop dailyMessage="How are you feeling today?" header="My journal" />
      <div className="pt-2">
        {journalItemInfo.map((i, indx) => (
          <JournalItem
            header={i.header}
            date={i.date}
            sharedWith={i.sharedWith} key={indx}
          />
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
