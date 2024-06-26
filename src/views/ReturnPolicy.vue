<template>
  <div id="return-policy">
    <div class="title">Return policy</div>
    <div class="subtitle">Return</div>
    <div class="text">
      <p>Our policy lasts 30 days. If 30 days have gone by since your purchase,
      unfortunately we can’t offer you a refund or exchange.</p>

      <p>To be eligible for a return, your item must be unused and in the same
      condition that you received it. It must also be in the original packaging.</p>

      <p>Several types of goods are exempt from being returned. Perishable goods such
      as food, flowers, newspapers or magazines cannot be returned. We also do not
      accept products that are intimate or sanitary goods, hazardous materials, or
      flammable liquids or gases.</p>

      <p>Additional non-returnable items: <br>
      * Gift cards<br>
      * Downloadable software products<br>
      * Some health and personal care items</p>

      <p>To complete your return, we require a receipt or proof of purchase.</p>

      <p>Please do not send your purchase back to the manufacturer.</p>

      <p>There are certain situations where only partial refunds are granted: (if applicable)<br>
      * Book with obvious signs of use<br>
      * CD, DVD, VHS tape, software, video game, cassette tape,
      or vinyl record that has been opened.<br>
      * Any item not in its original condition, is damaged or missing
      parts for reasons not due to our error.<br>
      * Any item that is returned more than 30 days after delivery</p>
    </div>
    <div class="subtitle">Refunds (if applicable)</div>
    <div class="text">
      <p>Once your return is received and inspected, we will send you an email
        to notify you that we have received your returned item. We will also notify
        you of the approval or rejection of your refund. <br>
        If you are approved, then your refund will be processed, and a credit will
        automatically be applied to your credit card or original method of payment,
        within a certain amount of days.</p>
    </div>
    <div class="subtitle">Late or missing refunds (if applicable)</div>
    <div class="text">
      <p>If you haven’t received a refund yet, first check your bank account again. <br>
        Then contact your credit card company, it may take some time before your
        refund is officially posted. <br>
        Next contact your bank. There is often some processing time before a refund is posted. <br>
        If you’ve done all of this and you still have not received your refund yet,
        please contact us at contact@demoshop.com. </p>
    </div>
    <div class="subtitle">Sale items (if applicable)</div>
    <div class="text">
      <p>Only regular priced items may be refunded, unfortunately sale
        items cannot be refunded. </p>
    </div>
    <div class="subtitle">Exchanges (if applicable)</div>
    <div class="text">
      <p>We only replace items if they are defective or damaged. If you need to exchange it for
        the same item, send us an email at email@email.com and send your item to:
        150 Elgin Street Ottawa Ontario CA K2P 1L4.A</p>
    </div>
    <div class="subtitle">Gifts</div>
    <div class="text">
      <p>If the item was marked as a gift when purchased and shipped directly to you,
        you’ll receive a gift credit for the value of your return. Once the returned item
        is received, a gift certificate will be mailed to you.</p>

      <p>If the item wasn’t marked as a gift when purchased, or the gift giver had the order
        shipped to themselves to give to you later, we will send a refund to the gift giver
        and he will find out about your return.</p>
    </div>
    <div class="subtitle">Shipping</div>
    <div class="text">
      <p>To return your product, you should mail your product to: 150 Elgin
        Street Ottawa Ontario CA K2P 1L4.</p>

      <p>You will be responsible for paying for your own shipping costs for returning
        your item. Shipping costs are non-refundable. If you receive a refund, the cost of
        return shipping will be deducted from your refund.</p>

      <p>Depending on where you live, the time it may take for your exchanged
        product to reach you, may vary.</p>

      <p>If you are shipping an item over $75, you should consider using a trackable
      hipping service or purchasing shipping insurance. We don’t guarantee that we
      will receive your returned item.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReturnPolicy',
  methods: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
#return-policy {
  .title {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 32px;
  }
  .subtitle {
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 32px;
  }
  .text {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 30px;
    p {
      margin-bottom: 15px;
    }
  }
}
</style>
