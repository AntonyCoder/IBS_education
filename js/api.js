 export default async function getItemsData (){
    try {
        const response = await fetch('http://localhost:3006/item/');
        if(!response.ok){
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e){
        console.error('Ошибка:', e);
    }
}

export async function getPictureMin (pictureId){
    try {
        const response = await fetch(`http://localhost:3006/picture/min/${pictureId}`);
        if(!response.ok){
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.blob();
        const imageUrl = URL.createObjectURL(data);
        console.log(data);
        console.log(imageUrl);
        return imageUrl;
    } catch (e){
        console.error('Ошибка:', e);
    }
}

