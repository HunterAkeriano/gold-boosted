<template>
  <TheFooterTemplate v-if="!isLoading" :footerData="footerData" :siteLinks="siteLinks" />

  <TheFooterSkeletor v-else />
</template>

<script setup>
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import InstagramIcon from '@/atoms/icons/InstagramIcon.vue'
import RedditIcon from '@/atoms/icons/RedditIcon.vue'
import DiscordIcon from '@/atoms/icons/DiscordIcon.vue'
import WhatsAppIcon from '@/atoms/icons/WhatsAppIcon.vue'
import TheFooterTemplate from '@/organisms/TheFooter/TheFooterTemplate.vue'
import TheFooterSkeletor from '@/organisms/TheFooter/TheFooterSkeletor.vue'

const props = defineProps(['siteLinks', 'isLoading'])

const footerData = [
  {
    title: 'footer.nav.information',
    linksList: [
      {
        locale: true,
        text: 'footer.nav.privacyPolicy',
        to: props.siteLinks['privacy_policy_link'],
        href: true
      },
      {
        locale: true,
        text: 'footer.nav.termsOfUse',
        to: props.siteLinks['terms_of_use_link'],
        href: true
      },
      {
        locale: true,
        text: 'footer.nav.refundPolicy',
        to: props.siteLinks['refund_policy_link'],
        href: true
      }
    ]
  },
  {
    title: 'footer.nav.socialNetworks',
    linksList: [
      {
        icon: FacebookIcon,
        href: true,
        text: 'Facebook',
        to: props.siteLinks['facebook_link']
      },
      {
        icon: InstagramIcon,
        href: true,
        text: 'Instagram',
        to: props.siteLinks['instagram_link']
      },
      {
        icon: RedditIcon,
        href: true,
        text: 'Reddit',
        to: props.siteLinks['reddit_link']
      }
    ]
  },
  {
    title: 'footer.nav.contactUs',
    linksList: [
      {
        text: props.siteLinks.email,
        to: `mailto:${props.siteLinks.email}`,
        href: true
      },
      {
        icon: DiscordIcon,
        text: 'Discord',
        to: props.siteLinks['discord_link'],
        href: true
      },
      {
        icon: WhatsAppIcon,
        text: 'WhatsApp',
        to: props.siteLinks['whats_up_link'],
        href: true
      }
    ]
  }
]
</script>

<style>
@import 'TheFooter.scss';
</style>
