module.exports = {
	title: "item",
	description: "Description d un item",
	type: "object",

	properties: {
            id: {
                "type": "string",
                "fromat": "uuid"
            },
			titre: {
				"type": "string"
			},
            genre:{
                "type":"string"

            },
            id_IMDB:{
                "type":"string"
            }
		},
	

	
	required: ["titre","genre","id_IMDB"],
	additionalProperties: false
}


