export interface XmlFileEntry {
  id: string;
  filename: string;
  title: string;
  bengaliTitle: string;
  xml: string;
}

export const xmlFiles: XmlFileEntry[] = [
  {
    id: 'home',
    filename: 'nagad_home.xml',
    title: 'Nagad Home Screen',
    bengaliTitle: 'নগদ হোম স্ক্রিন',
    xml: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#F5F5F5">

    <!-- Top Header -->
    <LinearLayout
        android:id="@+id/headerLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp"
        android:gravity="center_vertical"
        android:background="#FFFFFF">
        
        <ImageView
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:src="@drawable/nagod_logo" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="নগদ"
            android:textSize="20sp"
            android:textStyle="bold"
            android:textColor="#EC1C24"
            android:layout_marginStart="8dp"/>

        <View
            android:layout_width="0dp"
            android:layout_height="0dp"
            android:layout_weight="1"/>

        <ImageView
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_notification" />
    </LinearLayout>

    <!-- Scrollable Content -->
    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_below="@id/headerLayout"
        android:layout_above="@id/bottomNav">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:padding="16dp">

            <!-- Loan Banner (Active & Clickable) -->
            <LinearLayout
                android:id="@+id/layoutLoanBanner"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:background="@drawable/bg_loan_banner"
                android:orientation="horizontal"
                android:padding="16dp"
                android:gravity="center_vertical"
                android:clickable="true"
                android:focusable="true">

                <ImageView
                    android:layout_width="50dp"
                    android:layout_height="50dp"
                    android:src="@drawable/ic_loan_bag" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:orientation="vertical"
                    android:layout_marginStart="12dp">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="লোন নিন সহজে"
                        android:textSize="18sp"
                        android:textStyle="bold"
                        android:textColor="#222222"/>

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="আপনার প্রয়োজন, আমাদের সাথে"
                        android:textSize="12sp"
                        android:textColor="#666666"/>
                </LinearLayout>

                <ImageView
                    android:layout_width="24dp"
                    android:layout_height="24dp"
                    android:src="@drawable/ic_arrow_right" />
            </LinearLayout>

            <!-- Grid Menu (Locked except Loan) -->
            <GridLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:columnCount="4"
                android:rowCount="2"
                android:layout_marginTop="16dp">

                <!-- Send Money (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_send_money"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="সেন্ড মানি" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Cash Out (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_cash_out"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ক্যাশ আউট" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Mobile Recharge (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_mobile_recharge"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="মোবাইল রিচার্জ" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Add Money (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_add_money"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="অ্যাড মানি" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Transfer Money (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp" android:layout_marginTop="12dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_transfer_money"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ট্রান্সফার মানি" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Bill Pay (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp" android:layout_marginTop="12dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_bill_pay"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="বিল পে" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- EMI Payment (Locked) -->
                <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_columnWeight="1" android:orientation="vertical" android:gravity="center" android:clickable="false" android:focusable="false" android:padding="8dp" android:layout_marginTop="12dp">
                    <ImageView android:layout_width="36dp" android:layout_height="36dp" android:src="@drawable/ic_emi"/>
                    <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ইএমআই পেমেন্ট" android:textSize="12sp" android:textColor="#333333" android:layout_marginTop="4dp"/>
                </LinearLayout>

                <!-- Loan (Active & Clickable) -->
                <LinearLayout
                    android:id="@+id/layoutLoanGrid"
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_columnWeight="1"
                    android:orientation="vertical"
                    android:gravity="center"
                    android:clickable="true"
                    android:focusable="true"
                    android:padding="8dp"
                    android:layout_marginTop="12dp">
                    <ImageView
                        android:layout_width="36dp"
                        android:layout_height="36dp"
                        android:src="@drawable/ic_loan"/>
                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="লোন"
                        android:textSize="12sp"
                        android:textColor="#EC1C24"
                        android:textStyle="bold"
                        android:layout_marginTop="4dp"/>
                </LinearLayout>
            </GridLayout>

        </LinearLayout>
    </ScrollView>

    <!-- Bottom Navigation Bar -->
    <LinearLayout
        android:id="@+id/bottomNav"
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:layout_alignParentBottom="true"
        android:background="#FFFFFF"
        android:orientation="horizontal"
        android:gravity="center"
        android:elevation="8dp">

        <LinearLayout android:layout_width="0dp" android:layout_height="match_parent" android:layout_weight="1" android:gravity="center" android:orientation="vertical" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_home"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="হোম" android:textSize="10sp" android:textColor="#EC1C24"/>
        </LinearLayout>

        <LinearLayout android:layout_width="0dp" android:layout_height="match_parent" android:layout_weight="1" android:gravity="center" android:orientation="vertical" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_transaction"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="লেনদেন" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>

        <!-- QR Floating Button -->
        <FrameLayout
            android:layout_width="0dp"
            android:layout_height="match_parent"
            android:layout_weight="1"
            android:clickable="false">
            <ImageView
                android:layout_width="50dp"
                android:layout_height="50dp"
                android:layout_gravity="center"
                android:src="@drawable/ic_qr_code" />
        </FrameLayout>

        <LinearLayout android:layout_width="0dp" android:layout_height="match_parent" android:layout_weight="1" android:gravity="center" android:orientation="vertical" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_contacts"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="কন্টাক্টস" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>

        <LinearLayout android:layout_width="0dp" android:layout_height="match_parent" android:layout_weight="1" android:gravity="center" android:orientation="vertical" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_menu"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="আমার নগদ" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>

    </LinearLayout>

</RelativeLayout>`
  },
  {
    id: 'account_select',
    filename: 'dialog_account_select.xml',
    title: 'Account Type Selection Modal',
    bengaliTitle: 'অ্যাকাউন্ট নির্বাচন ডায়ালগ',
    xml: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#2C3E50"
    android:padding="16dp">

    <!-- Main Container Card -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:background="@drawable/bg_dialog_card"
        android:orientation="vertical"
        android:padding="20dp"
        android:layout_centerInParent="true">

        <!-- Top Header Gradient Area -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:gravity="center"
            android:background="@drawable/bg_orange_gradient"
            android:padding="16dp">

            <ImageView
                android:layout_width="40dp"
                android:layout_height="40dp"
                android:src="@drawable/nagod_logo" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="আপনার নগদ অ্যাকাউন্ট কোনটি?"
                android:textSize="18sp"
                android:textStyle="bold"
                android:textColor="#FFFFFF"
                android:layout_marginTop="8dp"/>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="সঠিক অ্যাকাউন্টের ধরন বেছে নিলে আপনার অভিজ্ঞতা আরও ভালো হবে"
                android:textSize="12sp"
                android:textColor="#FFFFFF"
                android:gravity="center"
                android:layout_marginTop="4dp"/>
        </LinearLayout>

        <!-- Account Selection Options -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:layout_marginTop="16dp">

            <!-- Nagad Regular (Selectable) -->
            <LinearLayout
                android:id="@+id/layoutNagadRegular"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:background="@drawable/bg_card_border_orange"
                android:orientation="horizontal"
                android:padding="12dp"
                android:gravity="center_vertical"
                android:clickable="true"
                android:focusable="true">

                <ImageView
                    android:layout_width="60dp"
                    android:layout_height="35dp"
                    android:src="@drawable/img_nagod_regular" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:orientation="vertical"
                    android:layout_marginStart="12dp">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="নগদ রেগুলার"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#000000"/>

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="সাধারণ নগদ অ্যাকাউন্ট — সবার জন্য"
                        android:textSize="10sp"
                        android:textColor="#666666"/>

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="⚡ তাৎক্ষণিক লোন"
                        android:textSize="10sp"
                        android:textColor="#D35400"
                        android:background="@drawable/bg_badge_yellow"
                        android:paddingStart="6dp"
                        android:paddingEnd="6dp"
                        android:paddingTop="2dp"
                        android:paddingBottom="2dp"
                        android:layout_marginTop="4dp"/>
                </LinearLayout>

                <RadioButton
                    android:id="@+id/radioRegular"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:checked="true"
                    android:clickable="false"/>
            </LinearLayout>

            <!-- Nagad Islamic (Locked / Non-clickable for this workflow) -->
            <LinearLayout
                android:id="@+id/layoutNagadIslamic"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:background="@drawable/bg_card_border_gray"
                android:orientation="horizontal"
                android:padding="12dp"
                android:gravity="center_vertical"
                android:layout_marginTop="12dp"
                android:clickable="false"
                android:focusable="false">

                <ImageView
                    android:layout_width="60dp"
                    android:layout_height="35dp"
                    android:src="@drawable/img_nagod_islamic" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:orientation="vertical"
                    android:layout_marginStart="12dp">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="নগদ ইসলামিক"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#000000"/>

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="শরীয়াহ সম্মত ইসলামিক অ্যাকাউন্ট"
                        android:textSize="10sp"
                        android:textColor="#666666"/>

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="🍃 সুদমুক্ত সেবা"
                        android:textSize="10sp"
                        android:textColor="#27AE60"
                        android:background="@drawable/bg_badge_green"
                        android:paddingStart="6dp"
                        android:paddingEnd="6dp"
                        android:paddingTop="2dp"
                        android:paddingBottom="2dp"
                        android:layout_marginTop="4dp"/>
                </LinearLayout>

                <RadioButton
                    android:id="@+id/radioIslamic"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:checked="false"
                    android:clickable="false"/>
            </LinearLayout>

        </LinearLayout>

        <!-- Bottom Action Button (Proceed) -->
        <Button
            android:id="@+id/btnProceed"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="নগদ রেগুলার নিয়ে এগিয়ে যান →"
            android:textColor="#FFFFFF"
            android:background="@drawable/bg_button_gradient"
            android:layout_marginTop="20dp"
            android:clickable="true"
            android:focusable="true"/>

    </LinearLayout>

</RelativeLayout>`
  },
  {
    id: 'loan_info',
    filename: 'screen_loan_info.xml',
    title: 'Step 1: Loan Information Form',
    bengaliTitle: 'ধাপ ১: তথ্যাবলী ফরম',
    xml: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#2C3E50">

    <!-- Top Toolbar -->
    <LinearLayout
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp"
        android:background="@drawable/bg_orange_gradient"
        android:gravity="center_vertical">

        <ImageView
            android:id="@+id/btnClose"
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_close"
            android:clickable="true"
            android:focusable="true"/>

        <View
            android:layout_width="0dp"
            android:layout_height="0dp"
            android:layout_weight="1"/>

        <ImageView
            android:layout_width="30dp"
            android:layout_height="30dp"
            android:src="@drawable/nagod_logo" />

        <View
            android:layout_width="0dp"
            android:layout_height="0dp"
            android:layout_weight="1"/>

        <ImageView
            android:id="@+id/btnHelp"
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_help"
            android:clickable="true"
            android:focusable="true"/>
    </LinearLayout>

    <!-- Step Progress Bar -->
    <LinearLayout
        android:id="@+id/stepProgress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/toolbar"
        android:orientation="horizontal"
        android:background="#FFFFFF"
        android:padding="12dp"
        android:gravity="center">

        <!-- Step 1: Active -->
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_active"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="তথ্য" android:textSize="10sp" android:textColor="#E67E22"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#CCCCCC" android:layout_gravity="center"/>
        
        <!-- Step 2: Locked -->
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="সারসংক্ষেপ" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#CCCCCC" android:layout_gravity="center"/>

        <!-- Step 3: Locked -->
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="পিন" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#CCCCCC" android:layout_gravity="center"/>

        <!-- Step 4: Locked -->
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ব্যালেন্স" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#CCCCCC" android:layout_gravity="center"/>

        <!-- Step 5: Locked -->
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="যাচাই" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
    </LinearLayout>

    <!-- Form Content Container -->
    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_below="@id/stepProgress"
        android:background="#FFFFFF"
        android:padding="16dp">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical">

            <!-- Security Notice Banner -->
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:background="@drawable/bg_green_box"
                android:orientation="horizontal"
                android:padding="12dp"
                android:gravity="center_vertical"
                android:clickable="false">

                <ImageView
                    android:layout_width="20dp"
                    android:layout_height="20dp"
                    android:src="@drawable/ic_shield_green" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text=" SSL ২৫৬-বিট এনক্রিপ্টেড - আপনার তথ্য সম্পূর্ণ নিরাপদ"
                    android:textSize="12sp"
                    android:textColor="#27AE60"
                    android:layout_marginStart="8dp"/>
            </LinearLayout>

            <!-- Full Name Input (Locked for edit) -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="সম্পূর্ণ নাম"
                android:textSize="12sp"
                android:textColor="#666666"
                android:layout_marginTop="16dp"/>

            <EditText
                android:id="@+id/etFullName"
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_edit_text"
                android:hint="আপনার পূর্ণ নাম লিখুন"
                android:paddingStart="12dp"
                android:textSize="14sp"
                android:clickable="false"
                android:focusable="false"
                android:layout_marginTop="4dp"/>

            <!-- Mobile Number Input (Locked) -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="নগদ মোবাইল নম্বর"
                android:textSize="12sp"
                android:textColor="#666666"
                android:layout_marginTop="12dp"/>

            <EditText
                android:id="@+id/etMobileNumber"
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_edit_text"
                android:hint="01XXXXXXXXX"
                android:paddingStart="12dp"
                android:textSize="14sp"
                android:clickable="false"
                android:focusable="false"
                android:layout_marginTop="4dp"/>

            <!-- Loan Amount Dropdown (Active & Clickable) -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="লোনের পরিমাণ"
                android:textSize="12sp"
                android:textColor="#666666"
                android:layout_marginTop="12dp"/>

            <Spinner
                android:id="@+id/spinnerLoanAmount"
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_edit_text"
                android:layout_marginTop="4dp"
                android:clickable="true"
                android:focusable="true"/>

            <!-- Loan Tenure Dropdown (Active & Clickable) -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="পরিশোধের মেয়াদ"
                android:textSize="12sp"
                android:textColor="#666666"
                android:layout_marginTop="12dp"/>

            <Spinner
                android:id="@+id/spinnerTenure"
                android:layout_width="match_parent"
                android:layout_height="48dp"
                android:background="@drawable/bg_edit_text"
                android:layout_marginTop="4dp"
                android:clickable="true"
                android:focusable="true"/>

            <!-- Next Step Button -->
            <Button
                android:id="@+id/btnNextStep"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="পরবর্তী ধাপে যান →"
                android:textColor="#FFFFFF"
                android:background="@drawable/bg_button_gradient"
                android:layout_marginTop="24dp"
                android:clickable="true"
                android:focusable="true"/>

        </LinearLayout>
    </ScrollView>

</RelativeLayout>`
  },
  {
    id: 'loan_summary',
    filename: 'screen_loan_summary.xml',
    title: 'Step 2: Loan Summary & Schedule',
    bengaliTitle: 'ধাপ ২: সারসংক্ষেপ ও পরিশোধ তালিকা',
    xml: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#1E1E1E">

    <!-- Top Toolbar -->
    <LinearLayout
        android:id="@+id/toolbarSummary"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp"
        android:background="@drawable/bg_orange_gradient"
        android:gravity="center_vertical">

        <ImageView
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_close"
            android:clickable="false"/>

        <View android:layout_width="0dp" android:layout_height="0dp" android:layout_weight="1"/>
        <ImageView android:layout_width="30dp" android:layout_height="30dp" android:src="@drawable/nagod_logo" />
        <View android:layout_width="0dp" android:layout_height="0dp" android:layout_weight="1"/>

        <ImageView
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_help"
            android:clickable="false"/>
    </LinearLayout>

    <!-- Step Progress (Summary Step Active) -->
    <LinearLayout
        android:id="@+id/stepSummaryProgress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/toolbarSummary"
        android:orientation="horizontal"
        android:background="#1E1E1E"
        android:padding="12dp"
        android:gravity="center">

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_completed"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="তথ্য" android:textSize="10sp" android:textColor="#27AE60"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#27AE60" android:layout_gravity="center"/>
        
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_active"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="সারসংক্ষেপ" android:textSize="10sp" android:textColor="#E67E22"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#555555" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="পিন" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#555555" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ব্যালেন্স" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#555555" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="যাচাই" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
    </LinearLayout>

    <!-- Content Area -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_below="@id/stepSummaryProgress"
        android:background="@drawable/bg_dark_card"
        android:orientation="vertical"
        android:padding="16dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="লোনের বিস্তারিত"
            android:textSize="18sp"
            android:textStyle="bold"
            android:textColor="#FFFFFF"
            android:layout_gravity="center_horizontal"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="তথ্যগুলো যাচাই করুন — সব ঠিক থাকলে এগিয়ে যান"
            android:textSize="11sp"
            android:textColor="#AAAAAA"
            android:layout_gravity="center_horizontal"
            android:layout_marginTop="4dp"/>

        <!-- Top Summary Cards Row -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:background="@drawable/bg_summary_box"
            android:padding="12dp"
            android:layout_marginTop="12dp"
            android:clickable="false">

            <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:orientation="vertical" android:gravity="center">
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="লোন পরিমাণ" android:textSize="10sp" android:textColor="#AAAAAA"/>
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="৳3,000" android:textSize="14sp" android:textStyle="bold" android:textColor="#FF5722"/>
            </LinearLayout>

            <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:orientation="vertical" android:gravity="center">
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="মোট মুনাফা" android:textSize="10sp" android:textColor="#AAAAAA"/>
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="৳135" android:textSize="14sp" android:textStyle="bold" android:textColor="#FF5722"/>
            </LinearLayout>

            <LinearLayout android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:orientation="vertical" android:gravity="center">
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="সর্বমোট দেয়" android:textSize="10sp" android:textColor="#AAAAAA"/>
                <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="৳3,135" android:textSize="14sp" android:textStyle="bold" android:textColor="#FF5722"/>
            </LinearLayout>
        </LinearLayout>

        <!-- Monthly Repayment Schedule Table Box -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="0dp"
            android:layout_weight="1"
            android:background="@drawable/bg_table_box"
            android:orientation="vertical"
            android:padding="12dp"
            android:layout_marginTop="12dp"
            android:clickable="false">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="📅 মাসিক পরিশোধ তালিকা"
                android:textSize="12sp"
                android:textColor="#FFA726"
                android:textStyle="bold"/>

            <!-- Table Header -->
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:paddingTop="8dp"
                android:paddingBottom="8dp">
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="মাস" android:textColor="#888888" android:textSize="11sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="2" android:text="তারিখ" android:textColor="#888888" android:textSize="11sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="পরিমাণ" android:textColor="#888888" android:textSize="11sp" android:gravity="end"/>
            </LinearLayout>

            <!-- Row 1 -->
            <LinearLayout android:layout_width="match_parent" android:layout_height="wrap_content" android:orientation="horizontal" android:paddingTop="8dp" android:paddingBottom="8dp" android:gravity="center_vertical">
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="1" android:textColor="#FFFFFF" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="2" android:text="04 Dec, 2026" android:textColor="#CCCCCC" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="৳1045" android:textColor="#FF5722" android:textSize="12sp" android:textStyle="bold" android:gravity="end"/>
            </LinearLayout>

            <!-- Row 2 -->
            <LinearLayout android:layout_width="match_parent" android:layout_height="wrap_content" android:orientation="horizontal" android:paddingTop="8dp" android:paddingBottom="8dp" android:gravity="center_vertical">
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="2" android:textColor="#FFFFFF" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="2" android:text="04 Jan, 2027" android:textColor="#CCCCCC" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="৳1045" android:textColor="#FF5722" android:textSize="12sp" android:textStyle="bold" android:gravity="end"/>
            </LinearLayout>

            <!-- Row 3 -->
            <LinearLayout android:layout_width="match_parent" android:layout_height="wrap_content" android:orientation="horizontal" android:paddingTop="8dp" android:paddingBottom="8dp" android:gravity="center_vertical">
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="3" android:textColor="#FFFFFF" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="2" android:text="04 Feb, 2027" android:textColor="#CCCCCC" android:textSize="12sp"/>
                <TextView android:layout_width="0dp" android:layout_height="wrap_content" android:layout_weight="1" android:text="৳1045" android:textColor="#FF5722" android:textSize="12sp" android:textStyle="bold" android:gravity="end"/>
            </LinearLayout>
        </LinearLayout>

        <!-- Final Confirmation Button -->
        <Button
            android:id="@+id/btnConfirmAndProceed"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="সম্মতি দিন ও এগিয়ে যান ✓"
            android:textColor="#FFFFFF"
            android:background="@drawable/bg_button_gradient"
            android:layout_marginTop="12dp"
            android:clickable="true"
            android:focusable="true"/>

    </LinearLayout>

</RelativeLayout>`
  },
  {
    id: 'loan_pin',
    filename: 'screen_loan_pin.xml',
    title: 'Step 3: PIN Verification Keypad',
    bengaliTitle: 'ধাপ ৩: পিন যাচাইকরণ কিপ্যাড',
    xml: `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#1E1E1E">

    <!-- Top Toolbar -->
    <LinearLayout
        android:id="@+id/toolbarPin"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp"
        android:background="@drawable/bg_orange_gradient"
        android:gravity="center_vertical">

        <ImageView
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_close"
            android:clickable="false"/>

        <View android:layout_width="0dp" android:layout_height="0dp" android:layout_weight="1"/>
        <ImageView android:layout_width="30dp" android:layout_height="30dp" android:src="@drawable/nagod_logo" />
        <View android:layout_width="0dp" android:layout_height="0dp" android:layout_weight="1"/>

        <ImageView
            android:layout_width="24dp"
            android:layout_height="24dp"
            android:src="@drawable/ic_help"
            android:clickable="false"/>
    </LinearLayout>

    <!-- Step Progress (PIN Step Active) -->
    <LinearLayout
        android:id="@+id/stepPinProgress"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/toolbarPin"
        android:orientation="horizontal"
        android:background="#1E1E1E"
        android:padding="12dp"
        android:gravity="center">

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_completed"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="তথ্য" android:textSize="10sp" android:textColor="#27AE60"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#27AE60" android:layout_gravity="center"/>
        
        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_completed"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="সারসংক্ষেপ" android:textSize="10sp" android:textColor="#27AE60"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#27AE60" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_active"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="পিন" android:textSize="10sp" android:textColor="#E67E22"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#555555" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="ব্যালেন্স" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
        <View android:layout_width="30dp" android:layout_height="2dp" android:background="#555555" android:layout_gravity="center"/>

        <LinearLayout android:layout_width="wrap_content" android:layout_height="wrap_content" android:orientation="vertical" android:gravity="center" android:clickable="false">
            <ImageView android:layout_width="24dp" android:layout_height="24dp" android:src="@drawable/ic_step_locked"/>
            <TextView android:layout_width="wrap_content" android:layout_height="wrap_content" android:text="যাচাই" android:textSize="10sp" android:textColor="#666666"/>
        </LinearLayout>
    </LinearLayout>

    <!-- PIN Input Layout -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_below="@id/stepPinProgress"
        android:background="@drawable/bg_dark_card"
        android:orientation="vertical"
        android:padding="16dp"
        android:gravity="center_horizontal">

        <ImageView
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:src="@drawable/ic_lock_icon"
            android:layout_marginTop="8dp"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="পিন যাচাইকরণ"
            android:textSize="18sp"
            android:textStyle="bold"
            android:textColor="#FFFFFF"
            android:layout_marginTop="8dp"/>

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="নগদ অ্যাকাউন্টের ৪-সংখ্যার গোপন পিন দিন"
            android:textSize="12sp"
            android:textColor="#AAAAAA"
            android:layout_marginTop="4dp"/>

        <!-- Secure Notice -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:background="@drawable/bg_green_box"
            android:orientation="horizontal"
            android:padding="10dp"
            android:gravity="center"
            android:layout_marginTop="16dp"
            android:clickable="false">
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="🛡 আপনার পিন এনক্রিপ্টেড পদ্ধতিতে সুরক্ষিভভাবে প্রেরণ করা হয়"
                android:textSize="11sp"
                android:textColor="#27AE60"/>
        </LinearLayout>

        <!-- PIN Dots Display -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="50dp"
            android:background="@drawable/bg_pin_box"
            android:orientation="horizontal"
            android:gravity="center"
            android:layout_marginTop="16dp"
            android:clickable="false">
            <!-- 4 PIN Dots -->
            <View android:layout_width="12dp" android:layout_height="12dp" android:background="@drawable/bg_dot_empty" android:layout_margin="12dp"/>
            <View android:layout_width="12dp" android:layout_height="12dp" android:background="@drawable/bg_dot_empty" android:layout_margin="12dp"/>
            <View android:layout_width="12dp" android:layout_height="12dp" android:background="@drawable/bg_dot_empty" android:layout_margin="12dp"/>
            <View android:layout_width="12dp" android:layout_height="12dp" android:background="@drawable/bg_dot_empty" android:layout_margin="12dp"/>
        </LinearLayout>

        <!-- Custom Keypad Grid (Locked/Disabled except functional PIN entry) -->
        <GridLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:columnCount="3"
            android:rowCount="4"
            android:layout_marginTop="16dp">

            <!-- 1 to 9 Keys -->
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="1" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="2" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="3" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button"/>
            
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="4" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="5" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="6" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>

            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="7" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="8" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="9" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>

            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="*" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="0" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
            <Button android:layout_width="0dp" android:layout_height="48dp" android:layout_columnWeight="1" android:text="⌫" android:textColor="#FFFFFF" android:background="@drawable/bg_keypad_button" android:layout_marginTop="8dp"/>
        </GridLayout>

        <!-- Submit Button -->
        <Button
            android:id="@+id/btnVerifyPin"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="পিন যাচাই করুন 🛡"
            android:textColor="#FFFFFF"
            android:background="@drawable/bg_button_gradient"
            android:layout_marginTop="16dp"
            android:clickable="true"
            android:focusable="true"/>

    </LinearLayout>

</RelativeLayout>`
  }
];
