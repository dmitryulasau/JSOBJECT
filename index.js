const electronicProducts = {
  product1: {
    name: "Laptop",
    brand: "Apple",
    price: 1500,
    specifications: {
      processor: "Intel Core i7",
      memory: "16GB RAM",
      storage: "512GB SSD",
      ports: ["USB-C", "HDMI", "Thunderbolt"],
    },
    features: ["Retina Display", "Touch ID", "Backlit Keyboard"],
  },
  product2: {
    name: "Smartphone",
    brand: "Samsung",
    price: 1000,
    specifications: {
      screen: "6.5-inch AMOLED",
      camera: "Triple Camera Setup",
      battery: "4500mAh",
      colors: ["Black", "White", "Blue"],
    },
    features: ["Wireless Charging", "Water Resistant", "Face Recognition"],
  },
  product3: {
    name: "Smart TV",
    brand: "LG",
    price: 2000,
    specifications: {
      screen: "55-inch OLED",
      resolution: "4K Ultra HD",
      operatingSystem: "WebOS",
      sizeOptions: ["55-inch", "65-inch", "75-inch", "85-inch"],
    },
    features: ["AI ThinQ", "Built-in Voice Control", "Cinema HDR"],
  },
  product4: {
    name: "Headphones",
    brand: "Sony",
    price: 300,
    specifications: {
      type: "Over-Ear",
      wireless: true,
      noiseCancellation: true,
      colors: ["Black", "White", "Blue", "Red"],
    },
    features: ["Hi-Res Audio", "30-hour Battery Life", "Quick Charge"],
  },
  product5: {
    name: "Gaming Console",
    brand: "Microsoft",
    price: 500,
    specifications: {
      storage: "1TB",
      resolution: "4K",
      controller: "Wireless",
      graphicsCard: ["RTX 3060", "Radeon RX 6600", "AMD Graphics Core Next"],
    },
    features: ["Xbox Game Pass", "Backward Compatibility", "HDR Gaming"],
  },
};

// 1. Problem: Access the brand of the Laptop.
console.log("------------ 1 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "laptop") {
    console.log(electronicProducts[product].brand);
  }
}

// Apple

// 2. Problem: Retrieve the specifications of the Smartphone.
console.log("------------ 2 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "smartphone") {
    console.log(electronicProducts[product].specifications);
  } else {
    console.log("Smartphone not found");
  }
}

// 3. Problem: Find the price of the Smart TV.
console.log("------------ 3 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "smart tv") {
    console.log(electronicProducts[product].price);
  } else {
    console.log("Smart TV not found");
  }
}

// 4. Problem: Access the features of the Headphones.
console.log("------------ 4 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "headphones") {
    console.log(electronicProducts[product].features);
  } else {
    console.log("Headphones not found");
  }
}

// 5. Problem: Retrieve the controller type of the Gaming Console.
console.log("------------ 5 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "gaming console") {
    console.log(electronicProducts[product].specifications["controller"]);
  }
}

// 6. Problem: Change the price of the Laptop to 1700.
console.log("------------ 6 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "laptop") {
    electronicProducts[product].price = 1700;
    console.log(electronicProducts[product].price);
  }
}

// 7. Problem: Add a new color ("Silver") to the colors of the Smartphone.
console.log("------------ 7 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "smartphone") {
    electronicProducts[product].specifications.colors.push("Silver");

    console.log(electronicProducts[product].specifications.colors);
  }
}

// 8. Problem: Remove the "Water Resistant" feature from the Smartphone.
console.log("------------ 8 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "smartphone") {
    const indexOfWR =
      electronicProducts[product].features.indexOf("Water Resistant");

    if (indexOfWR != -1) {
      electronicProducts[product].features.splice(indexOfWR, 1);
    } else {
      console.log("Item not found");
    }

    console.log(electronicProducts[product].features);
  }
}

// 9. Problem: Add a new product ("Tablet") to the electronicProducts object.
console.log("------------ 9 ------------");

electronicProducts["product6"] = {
  name: "Tablet",
  brand: "Unknown",
  price: 0,
  specifications: {},
  features: [],
};

console.log(electronicProducts.product6);

// 10. Problem: Retrieve the size options available for the Smart TV.
console.log("------------ 10 ------------");
for (let product in electronicProducts) {
  if (electronicProducts[product].name.toLowerCase() === "smart tv") {
    console.log(electronicProducts[product].specifications.sizeOptions);
  }
}
