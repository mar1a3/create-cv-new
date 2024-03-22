import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { InfoCard } from '../InfoCard/InfoCard';
import { FormControl } from '../FormControl/FormControl';
import { Input } from '../Input/Input';
import { FileUploader } from '../FileUploader/FileUploader';

import { setPersInfo, setLocation, setPhone, setBirthday, setPhoto } from '../../slices/personalInfoSlice';
import { RootState } from '../../store';

export const PersonalInfo = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state: RootState) => state.personalInfo);

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fullname = e.target.value;
        dispatch(setPersInfo(fullname))
    }
    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        dispatch(setLocation(location))
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        dispatch(setPhone(phone))
    }

    const handleChangeBirthday = (date: string) => {
        const formattedDate = dayjs(date);
        dispatch(setBirthday(formattedDate));
    }
    const handleChangeAvatar = (img: string) => {
        dispatch(setPhoto(img));
    };

    return (
        <InfoCard title="Персональная инфомация">
            <FormControl label="Фио" >
                <Input
                    value={personalInfo.fullname}
                    placeholder="Фио"
                    onChange={handleFullNameChange}
                />
            </FormControl>
            <FormControl label="Место жительства">
                <Input
                    value={personalInfo.location}
                    placeholder="Место жительства"
                    onChange={handleLocationChange}
                />
            </FormControl>
            <FormControl label="Номер телефона">
                <Input
                    value={personalInfo.phone}
                    placeholder="Номер телефона"
                    onChange={handlePhoneChange}
                />
            </FormControl>
            <FormControl label="Дата рождения">
                <DatePicker
                    onChange={handleChangeBirthday}
                    placeholder='Дата рождения'
                />
            </FormControl>
            <FileUploader
                onChange={handleChangeAvatar}
            />
        </InfoCard>
    )
}

