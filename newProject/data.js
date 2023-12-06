// // 所有商品
// const products = [...data.products];
// products.shuffle();

// // 熱門商品
// const popularProducts = products.filter((product) => product.sales > 0);
// popularProducts.sort((a, b) => b.sales - a.sales);

// // 熱門分類
// const popularCategories = data.categories.filter((category) => category.products.length > 0);
// popularCategories.sort((a, b) => b.products.length - a.products.length);

// // 角色
// const roles = data.roles.sort((a, b) => b.value - a.value);

// // 物品
// const items = data.items.sort((a, b) => a.name.localeCompare(b.name));


//............................................
let data ={}

fetch('../json/data.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData
    console.log(data); // 访问产品名
    updateUI(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

//===============================================================

function updateUI(data){
    document.getElementById("name").innerText=data.user.name
    document.getElementById("money").innerText=data.user.money

    updateActivityList(data)
    updateHotProductList(data)
    updateProductClassificationList(data)
    updateClassificationList(data)
    updateAllProductList(data)
    
    updateRoleList(data)
    updateAllItemList(data)
}

//===============================================================
const activityList = document.getElementById("activity-list");

function updateActivityList(data) {
    if(activityList===null)
        return
    activityList.innerHTML = "";
    // 遍历每个活动并创建相应的 DOM 元素
    data.activities.forEach(activity => {
        // 创建图片元素
        let imgElement = document.createElement('img');
        imgElement.className = "img";
        imgElement.src = activity.image;
        imgElement.alt = activity.name;

        // 将图片元素添加到活动列表中
        activityList.appendChild(imgElement);
    });
}
//===============================================================
const hotProductList = document.getElementById("hot-product-list");

function updateHotProductList(data) {
    if(hotProductList===null)
        return
    hotProductList.innerHTML = "";
    // 遍历每个产品并创建相应的 DOM 元素
    data.products.forEach(product => {
        // 创建产品卡片容器
        let productCard = document.createElement('div');
        productCard.className = "product-card d-flex flex-direction-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${product.image})`;

        // 创建产品名称元素
        let productName = document.createElement('a');
        productName.className = "product-name";
        productName.innerHTML = `<b>${product.name}</b>`;

        // 创建产品价格元素
        let productPrice = document.createElement('a');
        productPrice.className = "product-price";
        productPrice.textContent = `$${product.price} 起`;

        // 组合所有元素
        productCard.appendChild(imgDiv);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        // 将产品卡片添加到热门产品列表中
        hotProductList.appendChild(productCard);
    });
}

//===============================================================
const productClassificationList = document.getElementById("product-classification-list");

function updateProductClassificationList(data) {
    if(productClassificationList===null)
        return
    productClassificationList.innerHTML = "";
    // 遍历每个商品分类并创建相应的 DOM 元素
    data.categories.forEach(category => {
        // 创建商品分类卡片容器
        let categoryCard = document.createElement('div');
        categoryCard.className = "product-card d-flex flex-direction-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${category.image})`;

        // 创建商品分类名称元素
        let categoryName = document.createElement('a');
        categoryName.className = "product-classification-name";
        categoryName.innerHTML = `<b>${category.name}</b>`;

        // 组合所有元素
        categoryCard.appendChild(imgDiv);
        categoryCard.appendChild(categoryName);

        // 将商品分类卡片添加到列表中
        productClassificationList.appendChild(categoryCard);
    });
}


//===============================================================
//創建分類
const classificationList = document.getElementById("classification-list");

function updateClassificationList(data) {
    if(classificationList===null)
        return
    classificationList.innerHTML = "";
    // 假设 data.categories 是你的数据源
    data.categories.forEach(category => {
        // 创建分类选项元素
        let categoryElement = document.createElement('div');
        categoryElement.className = "classification-option";
        categoryElement.textContent = category.name;

        // 将分类选项添加到分类列表中
        classificationList.appendChild(categoryElement);
    });
}
//===============================================================
//創建所有商品
const allProductList = document.getElementById("all-product-list");

function updateAllProductList(data){
    if(allProductList===null)
        return
    allProductList.innerHTML = "";
    // 遍历每个产品并创建相应的 DOM 元素
    data.products.forEach(product => {
        // 创建产品卡片容器
        let productCard = document.createElement('div');
        productCard.className = "product-card d-flex flex-direction-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${product.image})`;

        // 创建产品名称元素
        let productName = document.createElement('a');
        productName.className = "product-name";
        productName.innerHTML = `<b>${product.name}</b>`;

        // 创建产品价格元素
        let productPrice = document.createElement('a');
        productPrice.className = "product-price";
        productPrice.textContent = `$${product.price} 起`;

        // 组合所有元素
        productCard.appendChild(imgDiv);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        // 将产品卡片添加到列表中
        allProductList.appendChild(productCard);
    });
}
//===============================================================
//角色創建
const roleList = document.getElementById("role-list");

function updateRoleList(data){
    if(roleList===null)
        return
    roleList.innerHTML = "";
    // 假设 data.roles 是你的数据源
    data.roles.forEach(role => {
        // 创建角色卡片容器
        let roleCard = document.createElement('div');
        roleCard.className = "role-card";

        // 创建角色图片
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${role.image})`;

        // 创建角色信息容器
        let roleInfo = document.createElement('div');
        roleInfo.className = "role-info";

        // 角色名
        let nameDiv = document.createElement('div');
        nameDiv.className = "name";
        nameDiv.textContent = role.name;

        // 角色能力值
        let abilityValueDiv = document.createElement('div');
        abilityValueDiv.className = "ability-value";
        abilityValueDiv.textContent = `體力：${role.value}`;

        // 角色物品列表
        let inventoryListDiv = document.createElement('div');
        inventoryListDiv.className = "inventory-list";
        role.inventory.forEach(item => {
            let inventoryDiv = document.createElement('div');
            inventoryDiv.className = "inventory";

            let itemImgDiv = document.createElement('div');
            itemImgDiv.className = "img";
            itemImgDiv.style.backgroundImage = `url(${item.image})`;

            inventoryDiv.appendChild(itemImgDiv);
            inventoryListDiv.appendChild(inventoryDiv);
        });

        // 操作按钮
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = "d-flex justify-content-between row-gap";

        let travelButton = document.createElement('button');
        travelButton.className = "travel";
        travelButton.textContent = "旅行";

        let exileButton = document.createElement('button');
        exileButton.className = "exile";
        exileButton.textContent = "放逐";

        buttonsDiv.appendChild(travelButton);
        buttonsDiv.appendChild(exileButton);

        // 组装角色卡片
        roleCard.appendChild(imgDiv);
        roleInfo.appendChild(nameDiv);
        roleInfo.appendChild(abilityValueDiv);
        roleInfo.appendChild(inventoryListDiv);
        roleInfo.appendChild(buttonsDiv);
        roleCard.appendChild(roleInfo);

        // 将角色卡片添加到列表中
        roleList.appendChild(roleCard);
    });
}

//===============================================================
//物品列表
const allItemList = document.getElementById("all-item-list");

function updateAllItemList(data){
    if(allItemList===null)
        return
    allItemList.innerHTML = "";
    // 假设 data.items 是你的数据源
    data.items.forEach(item => {
        // 创建每个项目的容器
        let itemElement = document.createElement('div');
        itemElement.className = "item d-flex flex-direction-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${item.image})`;

        // 创建项目名称元素
        let nameElement = document.createElement('a');
        nameElement.className = "item-name";
        let nameText = document.createElement('b');
        nameText.textContent = item.name;
        nameElement.appendChild(nameText);

        // 创建项目数量元素
        let quantityElement = document.createElement('a');
        quantityElement.className = "item-quantity";
        quantityElement.textContent = item.quantity;

        // 组合所有元素
        itemElement.appendChild(imgDiv);
        itemElement.appendChild(nameElement);
        itemElement.appendChild(quantityElement);

        // 将整个项目元素添加到列表中
        allItemList.appendChild(itemElement);
    });
}