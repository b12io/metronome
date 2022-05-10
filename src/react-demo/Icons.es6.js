import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import DemoIconCard from './demo-only-components/DemoIconCard.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import {
  Check, Lock, Notice, Disabled, Help, Search, Draggable,
  ChevronRight, Home, TimesCircle, RemoveCircle, SolidCircle, PlusCircle, Plus, Minus, ShoppingCart, Team,
  Briefcase, Image, Video, Award, Client, Testimonial, Blog,
  Announcement, Export, Link, Calendar, QuestionCircle, DateIcon, Clock, ImageUpload,
  AlignCenter, AlignLeft, AlignRight, Close, AppearanceLayout, AppearanceAppearance,
  AppearanceAdvanced, CloseMedia, Back, Product, BulletPoints, Desktop, Tablet, Mobile, Gear,
  Checkmark, CheckmarkCircle, CheckSelected, ContentIcon, Unlink, ChevronLeft, Todo, Folder,
  Star, StarFilled, Post, CaseStudy, Form, ContactInformation, Customer, Event, Faq, Integration, Location,
  Media, Steps, Project, SimpleText, ClearFormatting, StrikeThrough, TestimonialRound, FieldMapping, Sort, HeaderFooter, Pages,
  Move, Duplicate, Delete, Visible, Hidden, InfoCircle, WindowCode, Logout, Badge, Pencil, Upgrade,
  CreditCard, Indent, Key, Animations, DiagonalArrow, Import, AddCustomer, CaretDown, Repeat, Availability,
  CalendarEvent, Payments, Service, Email, AppCube, MagicWand, Layout, Send, Code, User, Section, Tag, Welcome,
  Website, Chat, RotateForward, Globe, At, Target, IconRow, IconColumn, IconSection, FolderFilled, BlogPost, MenuItems, Popup, Bold, Italic, Underline, UnorderedList, OrderedList,
  Flag, Testimonials, Chart, Play, Pause, AlignLeftV2, AlignCenterV2, AlignRightV2, AlignJustifyV2, Sidebar, ArrowCircle, Palette, Lightbox, Filter, Slider,
  Flash, Dashboard, Guides, Article, Pulse, Edit, ContentApproved, Dragger, PaperClip, Invoicing, Banking, Checkbox, Circle, Bank, Card, Contract,
  MinusCircle, RepeatCircle, BadgeCard, HeadphonesMic, CheckmarkLarge, NoticeOutlined, Archive, Questionnaire, Upload, ShareFeedback, Spaceship
} from '../../components/Icons.es6.js'

const ICONS = [
  {
    name: 'Check',
    component: Check
  },
  {
    name: 'Lock',
    component: Lock
  },
  {
    name: 'Notice',
    component: Notice
  },
  {
    name: 'Disabled',
    component: Disabled
  },
  {
    name: 'Help',
    component: Help
  },
  {
    name: 'Search',
    component: Search
  },
  {
    name: 'Draggable',
    component: Draggable
  },
  {
    name: 'ChevronLeft',
    component: ChevronLeft
  },
  {
    name: 'ChevronRight',
    component: ChevronRight
  },
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'TimesCircle (DEPRECATED)',
    component: TimesCircle
  },
  {
    name: 'SolidCircle',
    component: SolidCircle
  },
  {
    name: 'RemoveCircle',
    component: RemoveCircle
  },
  {
    name: 'PlusCircle',
    component: PlusCircle
  },
  {
    name: 'Plus',
    component: Plus
  },
  {
    name: 'Minus',
    component: Minus
  },
  {
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    name: 'Team',
    component: Team
  },
  {
    name: 'Briefcase',
    component: Briefcase
  },
  {
    name: 'Image',
    component: Image
  },
  {
    name: 'Video',
    component: Video
  },
  {
    name: 'Award',
    component: Award
  },
  {
    name: 'Client',
    component: Client
  },
  {
    name: 'Testimonial',
    component: Testimonial
  },
  {
    name: 'Testimonials',
    component: Testimonials
  },
  {
    name: 'Blog',
    component: Blog
  },
  {
    name: 'BlogPost',
    component: BlogPost
  },
  {
    name: 'Announcement',
    component: Announcement
  },
  {
    name: 'Export',
    component: Export
  },
  {
    name: 'Link',
    component: Link
  },
  {
    name: 'Unlink',
    component: Unlink
  },
  {
    name: 'Calendar',
    component: Calendar
  },
  {
    name: 'QuestionCircle',
    component: QuestionCircle
  },
  {
    name: 'DateIcon',
    component: DateIcon
  },
  {
    name: 'Clock',
    component: Clock
  },
  {
    name: 'ImageUpload',
    component: ImageUpload
  },
  {
    name: 'AlignCenter',
    component: AlignCenter
  },
  {
    name: 'AlignLeft',
    component: AlignLeft
  },
  {
    name: 'AlignRight',
    component: AlignRight
  },
  {
    name: 'AlignLeftV2',
    component: AlignLeftV2
  },
  {
    name: 'AlignCenterV2',
    component: AlignCenterV2
  },
  {
    name: 'AlignRightV2',
    component: AlignRightV2
  },
  {
    name: 'AlignJustifyV2',
    component: AlignJustifyV2
  },
  {
    name: 'Close',
    component: Close
  },
  {
    name: 'AppearanceLayout',
    component: AppearanceLayout
  },
  {
    name: 'AppearanceAppearance',
    component: AppearanceAppearance
  },
  {
    name: 'AppearanceAdvanced',
    component: AppearanceAdvanced
  },
  {
    name: 'ContentIcon',
    component: ContentIcon
  },
  {
    name: 'CloseMedia',
    component: CloseMedia
  },
  {
    name: 'Back',
    component: Back
  },
  {
    name: 'Product',
    component: Product
  },
  {
    name: 'BulletPoints',
    component: BulletPoints
  },
  {
    name: 'Desktop',
    component: Desktop
  },
  {
    name: 'Tablet',
    component: Tablet
  },
  {
    name: 'Mobile',
    component: Mobile
  },
  {
    name: 'Gear',
    component: Gear
  },
  {
    name: 'Checkmark',
    component: Checkmark
  },
  {
    name: 'CheckSelected',
    component: CheckSelected
  },
  {
    name: 'CheckmarkCircle',
    component: CheckmarkCircle
  },
  {
    name: 'Circle',
    component: Circle
  },
  {
    name: 'Folder',
    component: Folder
  },
  {
    name: 'FolderFilled',
    component: FolderFilled
  },
  {
    name: 'Todo',
    component: Todo
  },
  {
    name: 'Star',
    component: Star
  },
  {
    name: 'StarFilled',
    component: StarFilled
  },
  {
    name: 'Post',
    component: Post
  },
  {
    name: 'CaseStudy',
    component: CaseStudy
  },
  {
    name: 'Form',
    component: Form
  },
  {
    name: 'ContactInformation',
    component: ContactInformation
  },
  {
    name: 'Customer',
    component: Customer
  },
  {
    name: 'Event',
    component: Event
  },
  {
    name: 'FAQ',
    component: Faq
  },
  {
    name: 'Integration',
    component: Integration
  },
  {
    name: 'Location',
    component: Location
  },
  {
    name: 'Media',
    component: Media
  },
  {
    name: 'Steps',
    component: Steps
  },
  {
    name: 'Project',
    component: Project
  },
  {
    name: 'SimpleText',
    component: SimpleText
  },
  {
    name: 'ClearFormatting',
    component: ClearFormatting
  },
  {
    name: 'StrikeThrough',
    component: StrikeThrough
  },
  {
    name: 'TestimonialRound',
    component: TestimonialRound
  },
  {
    name: 'FieldMapping',
    component: FieldMapping
  },
  {
    name: 'Sort',
    component: Sort
  },
  {
    name: 'HeaderFooter',
    component: HeaderFooter
  },
  {
    name: 'Pages',
    component: Pages
  },
  {
    name: 'Move',
    component: Move
  },
  {
    name: 'Duplicate',
    component: Duplicate
  },
  {
    name: 'Delete',
    component: Delete
  },
  {
    name: 'Visible',
    component: Visible
  },
  {
    name: 'Hidden',
    component: Hidden
  },
  {
    name: 'InfoCircle',
    component: InfoCircle
  },
  {
    name: 'WindowCode',
    component: WindowCode
  },
  {
    name: 'Logout',
    component: Logout
  },
  {
    name: 'Badge',
    component: Badge
  },
  {
    name: 'Pencil',
    component: Pencil
  },
  {
    name: 'Upgrade',
    component: Upgrade
  },
  {
    name: 'CreditCard',
    component: CreditCard
  },
  {
    name: 'Indent',
    component: Indent
  },
  {
    name: 'Key',
    component: Key
  },
  {
    name: 'Animations',
    component: Animations
  },
  {
    name: 'DiagonalArrow',
    component: DiagonalArrow
  },
  {
    name: 'Import',
    component: Import
  },
  {
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    name: 'CaretDown',
    component: CaretDown
  },
  {
    name: 'Availability',
    component: Availability
  },
  {
    name: 'Repeat',
    component: Repeat
  },
  {
    name: 'CalendarEvent',
    component: CalendarEvent
  },
  {
    name: 'Service',
    component: Service
  },
  {
    name: 'Payments',
    component: Payments
  },
  {
    name: 'Email',
    component: Email
  },
  {
    name: 'AppCube',
    component: AppCube
  },
  {
    name: 'MagicWand',
    component: MagicWand
  },
  {
    name: 'Layout',
    component: Layout
  },
  {
    name: 'Send',
    component: Send
  },
  {
    name: 'Code',
    component: Code
  },
  {
    name: 'User',
    component: User
  },
  {
    name: 'Section',
    component: Section
  },
  {
    name: 'Tag',
    component: Tag
  },
  {
    name: 'Welcome',
    component: Welcome
  },
  {
    name: 'Website',
    component: Website
  },
  {
    name: 'Chat',
    component: Chat
  },
  {
    name: 'RotateForward',
    component: RotateForward
  },
  {
    name: 'Globe',
    component: Globe
  },
  {
    name: 'At',
    component: At
  },
  {
    name: 'Target',
    component: Target
  },
  {
    name: 'IconRow',
    component: IconRow
  },
  {
    name: 'IconColumn',
    component: IconColumn
  },
  {
    name: 'IconSection',
    component: IconSection
  },
  {
    name: 'MenuItems',
    component: MenuItems
  },
  {
    name: 'Popup',
    component: Popup
  },
  {
    name: 'Flag',
    component: Flag
  },
  {
    name: 'Chart',
    component: Chart
  },
  {
    name: 'Bold',
    component: Bold
  },
  {
    name: 'Italic',
    component: Italic
  },
  {
    name: 'Underline',
    component: Underline
  },
  {
    name: 'UnorderedList',
    component: UnorderedList
  },
  {
    name: 'OrderedList',
    component: OrderedList
  },
  {
    name: 'Play',
    component: Play
  },
  {
    name: 'Pause',
    component: Pause
  },
  {
    name: 'Sidebar',
    component: Sidebar
  },
  {
    name: 'ArrowCircle',
    component: ArrowCircle
  },
  {
    name: 'Palette',
    component: Palette
  },
  {
    name: 'Lightbox',
    component: Lightbox
  },
  {
    name: 'Filter',
    component: Filter
  },
  {
    name: 'Slider',
    component: Slider
  },
  {
    name: 'Flash',
    component: Flash
  },
  {
    name: 'Dashboard',
    component: Dashboard
  },
  {
    name: 'Guides',
    component: Guides
  },
  {
    name: 'Article',
    component: Article
  },
  {
    name: 'Pulse',
    component: Pulse
  },
  {
    name: 'Edit',
    component: Edit
  },
  {
    name: 'ContentApproved',
    component: ContentApproved
  },
  {
    name: 'Dragger',
    component: Dragger
  },
  {
    name: 'PaperClip',
    component: PaperClip
  },
  {
    name: 'Invoicing',
    component: Invoicing
  },
  {
    name: 'Banking',
    component: Banking
  },
  {
    name: 'Bank',
    component: Bank
  },
  {
    name: 'Card',
    component: Card
  },
  {
    name: 'Contract',
    component: Contract
  },
  {
    name: 'Checkbox',
    component: Checkbox
  },
  {
    name: 'MinusCircle',
    component: MinusCircle
  },
  {
    name: 'RepeatCircle',
    component: RepeatCircle
  },
  {
    name: 'BadgeCard',
    component: BadgeCard
  },
  {
    name: 'HeadphonesMic',
    component: HeadphonesMic
  },
  {
    name: 'CheckmarkLarge',
    component: CheckmarkLarge
  },
  {
    name: 'NoticeOutlined',
    component: NoticeOutlined
  },
  {
    name: 'Archive',
    component: Archive
  },
  {
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    name: 'Upload',
    component: Upload
  },
  {
    name: 'ShareFeedback',
    component: ShareFeedback
  },
  {
    name: 'Spaceship',
    component: Spaceship
  }
]

function Icons () {
  const icons = ICONS.map((iconData, index) => {
    const IconTag = iconData.component
    return (<DemoIconCard key={index} label={iconData.name}>
      <IconTag color="#766bff" />
    </DemoIconCard>
    )
  })
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Icons</h1>
        <p>Icons can be used almost in any component. All icons are in <code>SVG</code> format.</p>
        <MetaData
          importFrom="import { IconName } from '@b12/metronome/components/Icons.es6.js'"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="color"
            value="color"
            defaultValue="defaultColor"
            description="Sets color of an icon"
          />
          <MetaDataPropsItem
            property="className"
            value="string"
            defaultValue="undefined"
            description="Apply classes if needed"
          />
          <MetaDataPropsItem
            property="viewBox"
            value="string"
            defaultValue="0 0 16 16"
            description="Sets view box for SVG element"
          />
          <MetaDataPropsItem
            property="height"
            value="string, number"
            defaultValue="16"
            description=""
          />
          <MetaDataPropsItem
            property="width"
            value="string, number"
            defaultValue="16"
            description=""
          />
          <MetaDataPropsItem
            property="style"
            value="object"
            defaultValue="null"
            description="Adds additional styles to SVG element"
          />
        </MetaDataProps>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Available icons</h4>
        </div>

        <div>
          {icons}
        </div>
      </div>
    </DemoLayoutContent>
  )
}

export default Icons
