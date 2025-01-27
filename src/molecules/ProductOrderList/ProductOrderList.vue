<template>
  <table class="product-order-info">
    <thead class="product-order-info__head">
      <tr>
        <th class="product-order-info__head-title">product</th>

        <th class="product-order-info__head-title product-order-info__head-title_desktop">
          Attributes
        </th>

        <th class="product-order-info__head-title product-order-info__head-title_desktop">
          Quantity
        </th>

        <th class="product-order-info__head-title product-order-info__head-title_desktop">Price</th>
      </tr>
    </thead>

    <tbody class="product-order-info__body">
      <tr class="product-order-info__body-item">
        <td class="product-order-info__body-product">
          <div class="product-order-info__body-product-flex">
            <div class="product-order-info__img-block">
              <img
                class="product-order-info__img"
                src="@/assets/images/MainPage/product-1.png"
                alt="Product"
              />
            </div>

            <div class="product-order-info__body-product-text-block">
              <p class="product-order-info__name">World of Warcraft Batlle for Azeroth</p>

              <p class="product-order-info__type">Heroic Raid Run</p>
            </div>
          </div>
        </td>

        <td class="product-order-info__body-attributes">
          <div class="product-order-info__attribute">
            <p class="product-order-info__attribute-title">Level:</p>

            <p class="product-order-info__attribute-value">Ultra Fast</p>
          </div>

          <div class="product-order-info__attribute">
            <p class="product-order-info__attribute-title">Extra:</p>

            <p class="product-order-info__attribute-value">+3 traders</p>
          </div>

          <div class="product-order-info__attribute">
            <p class="product-order-info__attribute-title">Runs:</p>

            <p class="product-order-info__attribute-value">8</p>
          </div>

          <div class="product-order-info__attribute">
            <p class="product-order-info__attribute-title">Account control:</p>

            <p class="product-order-info__attribute-value">Selfplay</p>
          </div>
        </td>

        <td class="product-order-info__body-quantity">
          <p class="product-order-info__body-quantity-title">Quantity:</p>

          <p class="product-order-info__body-quantity-value">1</p>
        </td>

        <td class="product-order-info__body-price">
          <p class="product-order-info__body-price-title">Price:</p>

          <p class="product-order-info__body-price-value">$220</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style>
@import 'ProductOrderList.scss';
</style>
