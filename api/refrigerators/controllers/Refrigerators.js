'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

 module.exports = {

  importData: async (ctx) => {

    const data =  ctx.request.body
    // console.log(data)
    for( var i = 0;i< 5/*data ['length']*/;i++)
    {
      var brand_id = await Brands.find({name:data [i] ['brand']})
      // console.log(brand_id)
      if(brand_id == "")
      {
        brand_id = await Brands.create({name:data [i] ['brand']})
        brand_id = await Brands.find({name:data [i] ['brand']})
        // console.log(brand_id)
      }

      console.log(data[i]['builtin_stabiliser'])

      var builtin_stabiliser = false
      if(data[i]['builtin_stabiliser'] == 'TRUE')
        builtin_stabiliser = true

      // var enum_data = await Refrigerators.find({price_category: data[i] ['price_category']})

      // console.log(brand_id)
      // console.log(builtin_stabiliser)
      // console.log(enum_data)

      var brd = await Refrigerators.create({ Title :  data[i] ['title'],
                                             product_id_flipkart:data[i] ['product_id_flipkart'],
                                             mrp :  data[i] ['mrp'],
                                             selling_price_flipkart : data[i]['selling_price_flipkart'],
                                             current_price_flipkart : data[i]['current_price_flipkart'],
                                             current_seller_flipkart: data[i]['current_seller_flipkart'],
                                             price_category : data[i] ['price_category'].toLowerCase(),
                                             brand : brand_id [0] ['_id'],
                                             color : data[i] ['color'],
                                             builtin_stabiliser: builtin_stabiliser,
                                             target_audience: data[i] ['target_audience'],
                                             capacity : data[i] ['capacity'],
                                             shelf_type: data[i] ['shelf_type'],
                                             energy_star_rating: data[i]['energy_star_rating'],
                                             compressor_type: data[i]['compressor_type'],
                                             door_type: data[i]['door_type']
                                            })
      // console.log(brd)
    }

    // var brd = await Brands.find({name:data [0] ['brand']})

    // console.log(brd [0] ['_id'])
    ctx.response.body = "done"
  },


 };
