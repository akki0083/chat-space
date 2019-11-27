# ChatSpase DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|pass|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign: key|
|group_id|integer|foreign: key|
### Association
- belongs_to :user
- belongs_to :group

### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text||
|image|text||
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
### Asociation
- belongs_to :user
- belongs_to :group
