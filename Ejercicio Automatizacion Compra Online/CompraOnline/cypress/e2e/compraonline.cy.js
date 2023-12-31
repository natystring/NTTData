describe("Ejercicio Automatizado de Compra Online", () => {

    it("Automatizacion de Compra Online", () => {
        // Agregar 1 MacBook y 1 Canon EOS 5D color blue al carrito de compras
        cy.visit('http://opencart.abstracta.us')
        cy.get('.product-layout:nth-child(1) .hidden-xs').click()
        cy.get('.product-layout:nth-child(4) .hidden-xs').click()
        cy.get('#input-option226').click()
        cy.get('#input-option226').type('16')
        cy.get('#input-option226').click()
        cy.get('#button-cart').click()
        cy.get('#cart-total').click()     
    
        // Checkout Options
        // Seleccionamos el radio button Guest Checkout
        cy.get('.radio:nth-child(4) > label').click()
        cy.get('.radio:nth-child(4) input').click()
        cy.get('#button-account').click()
  
        // Billing Details
        cy.get('#input-payment-firstname').click()
        cy.get('#input-payment-firstname').type('Natalia')
        cy.get('#input-payment-lastname').click()
        cy.get('#input-payment-lastname').type('Cadena')
        cy.get('#input-payment-email').click()
        cy.get('#input-payment-email').type('paulanat@hotmail.com')
        cy.get('#input-payment-telephone').click()
        cy.get('#input-payment-telephone').type('593999722616')
        cy.get('#input-payment-company').click()
        cy.get('#input-payment-company').type('None')
        cy.get('#input-payment-address-1').click()
        cy.get('#input-payment-address-1').type('Quito')
        cy.get('#input-payment-address-2').click()
        cy.get('#input-payment-address-2').type('')
        cy.get('#input-payment-city').click()
        cy.get('#input-payment-city').type('Quito')
        cy.get('#input-payment-postcode').click()              
        cy.get('#input-payment-postcode').type('170514')                 
        cy.get("#input-payment-country").select("69")
        cy.get('#input-payment-zone').select("20")
        cy.get('#button-guest').click()
   
        // Delivery Details
        // Todos los campos ya se autollenaron, por lo que solo hay que hacer click en el botón "Continue"
        cy.get('#button-guest-shipping').click()

        // Delivery Method    
        // Flat Shipping Rate - $5.00 está seleccionado por defecto, pero lo seleccionamos otra vez
        cy.get('.panel-body > .radio > label').click()
        cy.get('.panel-body > .radio input').click()
        cy.get('#button-shipping-method').click()
 
        // Payment Method
        // Bank Transfer está seleccionado por defecto, pero lo seleccionamos otra vez
        cy.get('.panel-body > .radio:nth-child(2) > label').click()
        cy.get('.panel-body > .radio:nth-child(2) input').click()
        cy.get('.pull-right > input:nth-child(2)').click()
        cy.get('#button-payment-method').click()
 
        // Confirm Order
        cy.get('#button-confirm').click()

        // Confirm de la Compra
        cy.get('#content > h1').contains("Your order has been placed!")
        cy.get('#content > div > div > a').click()
    })
})