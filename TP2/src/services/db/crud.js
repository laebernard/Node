const { getCollection } = require('./connection');

async  function  findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function find(collectionName, query, option ={}){
    try{
        const collection = getCollection(collectionName);
        const result = await collection.find(query,option);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction find avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function insertOne(collectionName, query = []){
    try{
        const collection = getCollection(collectionName);
		//  avec nom des colonne {}
		// const query = [];
        const result = await collection.insertOne(query);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function insertMany(collectionName, query = [{}],option = {}){
    try{
        const collection = getCollection(collectionName);
		//  avec nom des colonne {}
		// const query = [];
        const result = await collection.insertMany(query,option);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async function updateOne(collectionName, filter = {},updateDoc = {} ,option = {}){
    try{
		// exemple de updateDoc

		const updateDoc = {
			$set: {}}
		

        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter,updateDoc,option);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${filter}, ${updateDoc}`);
		console.log(e);
		throw  e;
	}
}

async function updateMany(collectionName, filter = {},updateDoc = {}){
    try{
		const updateDoc = {
			$set: {}}
		

        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter,updateDoc);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${filter}, ${updateDoc}`);
		console.log(e);
		throw  e;
	}
}

async function replace(collectionName, query = {},replacement = {}){
    try{

        const collection = getCollection(collectionName);
        const result = await collection.replace(filter,replacement);
        return  result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}, ${replacement}`);
		console.log(e);
		throw  e;
	}
}

async function deleteMany(collectionName, query = {}){
    try{

        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(query);
		return  result;
		
        
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}
module.exports = {findOne,find,insertOne,insertMany,updateOne,updateMany,replace,deleteMany}