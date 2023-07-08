import ready from "../../js/utils/documentReady";
import HystModal from "./hystmodal";
import SimpleBar from "simplebar";
import SlimSelect from "slim-select";

ready(function () {
  const placeSelect = document.querySelector("[name='user-place']");
  const categorySelect = document.querySelector("[name='user-category']");

  const placeSlimSelect = new SlimSelect({ //eslint-disable-line
    select: placeSelect,
    settings: {
      showSearch: false,
    },
    events: {
      afterChange: () => {
        const id = placeSelect.dataset.id;
        const drop = document.querySelector(`.ss-content[id=${id}]`);
        const list = drop.querySelector(".ss-list");
        new SimpleBar(list, { autoHide: false });
      },
    },
  });
  const categorySlimSelect = new SlimSelect({
    select: "[name='user-category']",
    settings: {
      showSearch: false,
    },
    events: {
      afterChange: () => {
        const id = categorySelect.dataset.id;
        const drop = document.querySelector(`.ss-content[id=${id}]`);
        const list = drop.querySelector(".ss-list");
        new SimpleBar(list, { autoHide: false });
      },
    },
  });

  const directionsHost = document.querySelector(".directions");
  const modal = new HystModal({
    linkAttributeName: "data-hystmodal",
    beforeOpen: () => {
      Array.prototype.forEach.call(
        document.querySelectorAll(".ss-list"),
        (el) => new SimpleBar(el, { autoHide: false }),
      );
    },
  });

  if (directionsHost) {
    const tiles = directionsHost.querySelectorAll(".directions__tile");

    tiles.forEach((tile) => {
      const tileCategory = tile.dataset.cat;

      tile.addEventListener("click", () => {
        //categorySelect.value = tileCategory;
        categorySlimSelect.setSelected(tileCategory);

        modal.open("#popup");
      });
    });
  }

  window.thanks = function () {
    modal.open("#popup-thanks");
  };
});
