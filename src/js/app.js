// // Import vendor jQuery plugin example
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {

    const toggleMenu = () => {
        $('body').toggleClass('no-scroll')
        $('#overlay').toggleClass('d-none')
        $('#menu-mobile').toggleClass('closed')
        $('#close-btn').toggleClass('closed')
    }

    $('#open-btn, #close-btn, #overlay, .menu-mobile__link').click(() => toggleMenu())


    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top,
          },
          100,
          'linear'
        )
      })


	$('[data-tab]').click(function() {

        $('[data-tab]').each(function () {
            $(this).removeClass('active')
        })

        $(this).addClass('active')

        const chartContent = $('[data-chart-content]')

        const priceTokenToday = $(this).data('price-token-today') || '0 $'
        const priceToday = $(this).data('price-today') || '0 $'
        const privatePrice = $(this).data('private-price') || '0 $'
        const entryPrice = $(this).data('entry-price') || '0 $'
        const profit = $(this).data('profit') || '0 %'
        const entry = $(this).data('entry') || ''
        const logoSrc = $(this).data('logo-src') || '0 $'
        const name = $(this).data('name') || ''

        $('#chart-name').text(name)
        $('#chart-logo').attr('src', logoSrc)
        $('#profit-percent').text(profit)
        $('#entry-info').text(entry)

        $('span[data-price-token-today]').text(priceTokenToday)
        $('span[data-price-today]').text(priceToday)
        $('span[data-private-price]').text(privatePrice)
        $('span[data-entry-price]').text(entryPrice)
    })

    const courseBUSDtoPOOL = 3.5
    let inputNum = 0

    $('#converter_input_from').on( "input", function () {
        inputNum = Number.parseFloat($(this).val())
        $('#converter_input_to').val('')
    } )

    $('#exchange-btn').click(() => {
        const converedNum = Math.floor(inputNum * courseBUSDtoPOOL * 1000) / 1000
        $('#converter_input_to').val(converedNum)
    })
})
