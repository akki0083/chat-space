require 'rails_helper'
describe User do
  describe '#create' do
    context 'can save' do

      # テキストと画像があれば保存できる
      it "is valid with a content, image" do
        expect(build(:message)).to be_valid
      end

      # テキストがあれば保存できる
      it "is valid with a content" do
        expect(build(:message, content: nil)).to be_valid
      end

      # 画像があれば保存できる
      it "is valid with a image" do
        expect(build(:message, image: nil)).to be_valid
      end
    end

    context 'can not save' do
      # テキストと画像がないと保存できない
      it "is invalid without a content and image" do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it 'is invalid without group_id' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end

      it 'is invalid without user_id' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end
  end
end
