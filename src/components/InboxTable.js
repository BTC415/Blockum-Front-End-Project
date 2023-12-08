import { Fragment, useEffect, useRef, useState } from "react";

const InboxTable = ({
  children,
  tableId,
  sort,
  previousBtnId,
  nextBtnId,
  pagginationId,
  activeClass,
  pagginationContainerId,
  pagginationClass,
  previousBtnClass,
  nextBtnClass,
  previousIcon,
  nextIcon,
  checkBox,
  checkBoxAll,
  checkBoxMother,
}) => {
  // //  Start funtion
  const [allData, setAllData] = useState(null);
  const [previseButton, setPreviseButton] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);
  const [allPagginationBtn, setAllPagginationBtn] = useState(null);
  const activePaggination = useRef(0);
  const [checkBoxData, setCheckBoxData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setAllData(
        document.querySelectorAll(
          tableId ? tableId : "#dataTable_4 tableBody tr"
        )
      );
      paggination_(
        0,
        document.querySelectorAll(
          tableId ? tableId : "#dataTable_4 tableBody tr"
        ).length
      );
      setPreviseButton(
        document.getElementById(
          previousBtnId ? previousBtnId : "dataTable4_previous"
        )
      );
      setNextBtn(
        document.querySelector(nextBtnId ? `#${nextBtnId}` : "#dataTable4_next")
      );
      setAllPagginationBtn(
        document.querySelectorAll(
          pagginationId ? `#${pagginationId}` : "#dataTable4_paggination"
        )
      );
      setCheckBoxData(document.querySelectorAll(checkBoxAll));
      checkBoxFun();
    }, 2000);
  }, []);

  const chnageDisplay = (fromNumer, toNumber) => {
    if (allData) {
      for (var i = 0; i < allData.length; ++i) {
        if (i >= fromNumer && i < toNumber) {
          allData[i].classList.remove("d-none");
        } else {
          allData[i].classList.add("d-none");
        }
      }
    }
  };

  activePaggination.current === 0 && chnageDisplay(0, sort);

  const paggination_ = (active, allData) => {
    const container = document.querySelector(
      pagginationContainerId ? pagginationContainerId : "#dataTable4_paginate"
    );

    //     Previoust btn
    const previous = document.createElement("li");
    previous.className = previousBtnClass;
    previous.id = previousBtnId;
    const previousA = document.createElement("a");
    previousA.className = "page-link c-pointer";
    const previousI = document.createElement("i");
    previousI.className = previousIcon;
    previous.appendChild(previousA);
    previousA.appendChild(previousI);

    if (Math.ceil(document.querySelectorAll(tableId).length / sort) >= 1) {
      container.appendChild(previous);
    }

    //     Next
    const next = document.createElement("li");
    next.className = nextBtnClass;
    next.id = nextBtnId;
    const nextA = document.createElement("a");
    nextA.className = "page-link c-pointer";
    const nextI = document.createElement("i");
    nextI.className = nextIcon;
    next.appendChild(nextA);
    nextA.appendChild(nextI);

    // Paggination
    for (
      let i = 0;
      i < Math.ceil(document.querySelectorAll(tableId).length / sort);
      i++
    ) {
      const pagginationLi = document.createElement("li");
      pagginationLi.className =
        active == i
          ? `${pagginationClass} ${activeClass} c-pointer`
          : `${pagginationClass} c-pointer`;
      const paginationA = document.createElement("a");
      paginationA.className = `page-link  c-pointer`;
      pagginationLi.id = pagginationId;
      paginationA.innerHTML = i + 1;
      pagginationLi.appendChild(paginationA);

      if (Math.ceil(document.querySelectorAll(tableId).length / sort) >= 1) {
        container.appendChild(pagginationLi);
      }
    }
    if (Math.ceil(document.querySelectorAll(tableId).length / sort) >= 1) {
      container.appendChild(next);
    }
  };

  const nextClick = () => {
    nextBtn &&
      nextBtn.addEventListener("click", () => {
        activePaggination.current =
          activePaggination.current + 1 <
          Math.ceil(document.querySelectorAll(tableId).length / sort)
            ? activePaggination.current + 1
            : activePaggination.current;

        for (
          let i = 0;
          i <
          document.querySelectorAll(
            pagginationId ? `#${pagginationId}` : "#dataTable4_paggination"
          ).length;
          i++
        ) {
          const element = document.querySelectorAll(
            pagginationId ? `#${pagginationId}` : "#dataTable4_paggination"
          )[i];
          i == activePaggination.current
            ? element.classList.add(activeClass ? activeClass : "current")
            : element.classList.remove(activeClass ? activeClass : "current");
        }
        chnageDisplay(
          activePaggination.current * sort,
          (activePaggination.current + 1) * sort
        );
      });
  };
  const PreviClick = () => {
    previseButton &&
      previseButton.addEventListener("click", () => {
        activePaggination.current =
          activePaggination.current >= 1
            ? activePaggination.current - 1
            : activePaggination.current;

        for (
          let i = 0;
          i <
          document.querySelectorAll(
            pagginationId ? `#${pagginationId}` : "#dataTable4_paggination"
          ).length;
          i++
        ) {
          const element = document.querySelectorAll(
            pagginationId ? `#${pagginationId}` : "#dataTable4_paggination"
          )[i];
          i == activePaggination.current
            ? element.classList.add(activeClass ? activeClass : "current")
            : element.classList.remove(activeClass ? activeClass : "current");
        }
        chnageDisplay(
          activePaggination.current * sort,
          (activePaggination.current + 1) * sort
        );
      });
  };

  // Complete
  const forLoop = () => {
    if (allPagginationBtn) {
      for (let i = 0; i < allPagginationBtn.length; i++) {
        const element = allPagginationBtn[i];
        element.addEventListener("click", () => {
          activePaggination.current = i;
          chnageDisplay(
            activePaggination.current * sort,
            (activePaggination.current + 1) * sort
          );

          for (let j = 0; j < allPagginationBtn.length; j++) {
            const e = allPagginationBtn[j];
            e == element
              ? e.classList.add(activeClass ? activeClass : "current")
              : e.classList.remove(activeClass ? activeClass : "current");
          }
        });
      }
    }
  };

  // CheckBox
  const checkBoxFun = () => {
    if (checkBox) {
      const motherChackBox = document.querySelector(checkBoxMother);
      const chackbox = document.querySelectorAll(checkBoxAll);
      const checkBox_ = (type) => {
        for (let i = 0; i < chackbox.length; i++) {
          const element = chackbox[i];
          if (type === "all") {
            if (motherChackBox.checked) {
              element.checked = true;
            } else {
              element.checked = false;
            }
          } else {
            if (!element.checked) {
              motherChackBox.checked = false;
              break;
            } else {
              motherChackBox.checked = true;
            }
          }
        }
      };
      document.querySelector(checkBoxMother).addEventListener("click", () => {
        checkBox_("all");
      });
      for (let i = 0; i < chackbox.length; i++) {
        const e = chackbox[i];
        e.addEventListener("click", () => checkBox_());
      }
    }
  };

  useEffect(() => {
    PreviClick();
  }, [previseButton]);
  useEffect(() => {
    forLoop();
  }, [forLoop]);
  useEffect(() => {
    nextClick();
  }, [nextBtn]);
  useEffect(() => {
    checkBoxFun();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default InboxTable;
